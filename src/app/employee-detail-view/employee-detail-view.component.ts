import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../dtos/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-detail-view',
  templateUrl: './employee-detail-view.component.html',
  styleUrls: ['./employee-detail-view.component.scss']
})
export class EmployeeDetailViewComponent implements OnInit {

  currentEmployee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
    this.route.params.subscribe(param => this.getEmployeeByID(param['id']));
  }

  async ngOnInit() {

  }

  async getEmployeeByID(id) {
    await this.employeeService.getEmployeeById(id).then(
      res => {
        console.log('get-employee-successful');
        this.currentEmployee = <Employee> res;
      },
      err => {
        console.log(err);
      });
  }
}
