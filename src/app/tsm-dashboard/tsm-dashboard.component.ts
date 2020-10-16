import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Employee} from '../dtos/employee';
import {EmployeeService} from'../services/employee.service';
import {Campus} from '../dtos/campus'
import {CampusService} from '../services/campus.service';


@Component({
  selector: 'app-tsm-dashboard',
  templateUrl: './tsm-dashboard.component.html',
  styleUrls: ['./tsm-dashboard.component.scss']
})
export class TsmDashboardComponent implements OnInit {

  employees:Employee[]=[];
  dataSource:any[]=[];
  campuses:Campus[]=[];
  dataSource2:Campus[]=[];

  constructor(private employeeService:EmployeeService, private campusService:CampusService) { }

  ngOnInit(): void {

        // this.getEmployees();
        this.getCampus();
        
  }



// async getEmployees(){
//   await this.employeeService.getemployees().subscribe
//   (
//     (response)=>
//     {
//       this.employees = response as Employee[];
//       this.dataSource = this.employees;
//       console.log("this is dashboard")
//       console.log(this.employees);
//       console.log(this.dataSource);
//     },
//     (error) => console.log(error)
//   )

// }

async getCampus(){
  await this.campusService.getCampus().subscribe
  (
    (response)=>
    {
      this.campuses = response as Campus[];
      this.dataSource2 = this.campuses;
      console.log("this is dashboard")
      console.log(this.campuses);
      console.log(this.dataSource2);
    },
    (error) => console.log(error)
  )

}



  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'title'];
  displayedColumns2: string[] = ['id', 'name', 'abbrName'];
  


}
