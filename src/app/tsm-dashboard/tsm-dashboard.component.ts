import { Component, OnInit,AfterViewInit,ViewChild} from '@angular/core';
import { from } from 'rxjs';
import {Employee} from '../dtos/employee';
import {EmployeeService} from'../services/employee.service';
import {Campus} from '../dtos/campus'
import {CampusService} from '../services/campus.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-tsm-dashboard',
  templateUrl: './tsm-dashboard.component.html',
  styleUrls: ['./tsm-dashboard.component.scss']
})
export class TsmDashboardComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  employees:Employee[]=[];
  dataSource: MatTableDataSource<Employee>;
  campuses:Campus[]=[];
  dataSource2:Campus[]=[];

  constructor(private employeeService:EmployeeService, private campusService:CampusService) {
   
   }

  ngOnInit(): void {

        this.getEmployees();
        this.getCampus();
        this.dataSource = new MatTableDataSource(this.employees);
        
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
  await this.employeeService.getemployees().then
  (
    (response)=>
    {
      this.employees = response as Employee[];
      console.log("this is dashboard")
      console.log(this.employees);
      console.log(this.dataSource);
    },
    (error) => console.log(error)
  )

}

async getCampus(){
  await this.campusService.getCampus().then
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
  columns = ['id', 'firstName', 'lastName', 'title'];
  data = this.employees;
  options = {
    filterType: 'checkbox',
  };

}
