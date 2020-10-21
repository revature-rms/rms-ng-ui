import { Component,AfterViewInit,ViewChild} from '@angular/core';
import {Employee} from '../dtos/employee';
import {EmployeeService} from'../services/employee.service';
import {Campus} from '../dtos/campus'
import {CampusService} from '../services/campus.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { OnInit } from '@angular/core';




@Component({
  selector: 'app-tsm-dashboard',
  templateUrl: './tsm-dashboard.component.html',
  styleUrls: ['./tsm-dashboard.component.scss']
})
export class TsmDashboardComponent implements OnInit, AfterViewInit {



  employees:Employee[]=[];
  
  campuses:Campus[]=[];
  dataSource2:Campus[]=[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private employeeService:EmployeeService, private campusService:CampusService) {
   

   }

   ngOnInit() {

    this.getEmployees();
    this.getCampus();
  

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


async getEmployees(){
  await this.employeeService.getemployees().subscribe
  (
    (response)=>
    {
      this.employees = response as Employee[];
      this.dataSource = new MatTableDataSource(this.employees);
      console.log(this.dataSource);
    },
    (error) => console.log(error)
  )

}

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
  dataSource: MatTableDataSource<Employee>;
  


}
