import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Employee} from '../dtos/employee';
import {EmployeeService} from'../services/employee.service';


@Component({
  selector: 'app-tsm-dashboard',
  templateUrl: './tsm-dashboard.component.html',
  styleUrls: ['./tsm-dashboard.component.scss']
})
export class TsmDashboardComponent implements OnInit {

  employees:Employee[]=[];
  dataSource:any[]=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {

        this.getEmployees();
  }



async getEmployees(){
  await this.employeeService.getemployees().subscribe
  (
    (response)=>
    {
      this.employees = response as Employee[];
      this.dataSource = this.employees;
      console.log("this is dashboard")
      console.log(this.employees);
      console.log(this.dataSource);
    },
    (error) => console.log(error)
  )

}
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'title'];
  


}
