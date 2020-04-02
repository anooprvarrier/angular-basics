import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './services/employee.service';
import { EmployeeServiceMock } from './mock/employee.service.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let employeeServiceMock: EmployeeServiceMock;

  beforeEach(async(() => {
    employeeServiceMock = new EmployeeServiceMock();
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        EmployeeComponent
      ],
      providers: [
        { provide: EmployeeService, useValue: employeeServiceMock }
      ]
    }).compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
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
      expect(component.title).toEqual('Angular basics');
    });
  });

});
