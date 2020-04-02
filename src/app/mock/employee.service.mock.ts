import { Observable, of } from 'rxjs';

let employeesData = require('./json/employees.json');
export class EmployeeServiceMock {

    getEmployees(): Observable<any> {
        let response = { ...employeesData }
        return of(response);
    }
}