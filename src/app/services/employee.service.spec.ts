import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(EmployeeService);
    httpTestingController = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe(':', () => {

    it('should call getEmployees method.', () => {
      const employees = [
        {
          "id": "1",
          "employee_name": "Tiger Nixon",
          "employee_salary": "320800",
          "employee_age": "61",
          "profile_image": ""
        }];
      service.getEmployees().subscribe(response => {
        expect(response.data).toEqual(employees);
      });

      const req = httpTestingController.expectOne('http://dummy.restapiexample.com/api/v1/employees');

      expect(req.request.method).toBe('GET');

      req.flush({
        data: employees
      });
    });
    afterEach(() => {
      httpTestingController.verify();
    });
  });
});