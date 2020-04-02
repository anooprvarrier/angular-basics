import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeComponent } from './employee.component';
import { EmployeeService } from '../services/employee.service';
import { EmployeeServiceMock } from '../mock/employee.service.mock';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs';

describe('EmployeeComponent', () => {
  let component: EmployeeComponent;
  let fixture: ComponentFixture<EmployeeComponent>;
  let employeeServiceMock: EmployeeServiceMock;
  beforeEach(async(() => {
    employeeServiceMock = new EmployeeServiceMock();
    TestBed.configureTestingModule({
      declarations: [EmployeeComponent],
      providers: [
        { provide: EmployeeService, useValue: employeeServiceMock }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    component.ngOnInit();
  })

  it('should create the app component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it(`should have as title 'Angular basics'`, () => {
      expect(component.title).toEqual('Employees:');
    });

    it('should define employees.', () => {
      expect(component.employees).toBeDefined();
    });

    it('should have employee length to equal 24', () => {
      expect(component.employees.length).toEqual(24);
    });

    it('should have employees length zero, if response contains no data.', () => {
      const employeeService = fixture.debugElement.injector.get(EmployeeService);
      spyOn(employeeService, 'getEmployees').and.returnValue(of({
        "status": "success",
        "data": []
      }));
      component.employees=[];
      component.ngOnInit();
      expect(component.employees.length).toEqual(0);
    });

    it('should have employees length zero, if response returned is not success.', () => {
      const employeeService = fixture.debugElement.injector.get(EmployeeService);
      spyOn(employeeService, 'getEmployees').and.returnValue(of({
        "status": "failed"
      }));
      component.employees=[];
      component.ngOnInit();
      expect(component.employees.length).toEqual(0);
    });

    it('should have employees length zero, if api returns error.', () => {
      const employeeService = fixture.debugElement.injector.get(EmployeeService);
      spyOn(employeeService, 'getEmployees').and.callFake(() => {
        return throwError(new Error('Fake error'));
      });
      component.employees=[];
      component.ngOnInit();
      expect(component.employees.length).toEqual(0);
    });

  });
});
