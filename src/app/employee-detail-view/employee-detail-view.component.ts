import { Component, OnInit } from '@angular/core';
import { Employee } from '../dtos/employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-detail-view',
  templateUrl: './employee-detail-view.component.html',
  styleUrls: ['./employee-detail-view.component.scss']
})
export class EmployeeDetailViewComponent implements OnInit {

  currentEmployee: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  async ngOnInit() {

    await this.employeeService.getEmployeeBy(14).subscribe(
      res => {
        console.log('get-employee-successful');
        this.currentEmployee = <Employee> res;
      },
      err => {
        console.log(err);
      });

  }

}
