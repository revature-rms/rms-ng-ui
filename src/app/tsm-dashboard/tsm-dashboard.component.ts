
import { Component, OnInit,AfterViewInit,ViewChild} from '@angular/core';
import {Employee} from '../dtos/employee';
import {EmployeeService} from'../services/employee.service';
import {Campus} from '../dtos/campus'
import {CampusService} from '../services/campus.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


//TODO: User profile editing 
//TODO: Batch table and info access 

@Component({
  selector: 'app-tsm-dashboard',
  templateUrl: './tsm-dashboard.component.html',
  styleUrls: ['./tsm-dashboard.component.scss']
})
export class TsmDashboardComponent implements OnInit {



  employees:Employee[]=[];
  campuses:Campus[]=[];
  dataSource2:Campus[]=[];
  dataSource: MatTableDataSource<Employee>;

  constructor(private employeeService:EmployeeService, private campusService:CampusService) {
  
  }

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(){
    this.getEmployees();
    this.getCampus();   
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
      this.dataSource.sort = this.sort;

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

}
