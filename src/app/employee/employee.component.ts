import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employees',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public title: string;
  public employees: any[] = [];
  constructor(
    private employeeService: EmployeeService
  ) { }
  ngOnInit() {
    this.initialize();
  }
  private initialize(): void {
    this.title = 'Employees:';
    this.getEmployees();
  }

  private getEmployees(): void {
    this.employeeService.getEmployees().subscribe(response => {
      if (response && (response.status == "success") && response.data) {
        this.employees = response.data;
      } else {
        console.log('No employees');
      }
    }, error => {
      console.log(error);
    })
  }

}
