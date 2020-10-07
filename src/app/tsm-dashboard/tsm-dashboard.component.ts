import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Employee} from '../dtos/Employee';
import {EmployeeService} from'../services/employee.service';


// export interface PeriodicElement {
//   name: string;
//   position: number;
//   weight: number;
//   symbol: string;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-tsm-dashboard',
  templateUrl: './tsm-dashboard.component.html',
  styleUrls: ['./tsm-dashboard.component.scss']
})
export class TsmDashboardComponent implements OnInit {

  employees:Employee[];
  dataSource:any[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
        // this.getEmployees();
        // this.dataSource = this.employees;
        // console.log(this.dataSource);

        this.employeeService.getemployees().subscribe
        (
          (response)=>
          {
            this.employees = response as Employee[];
            this.dataSource = this.employees;
            console.log(this.employees);
          },
          (error) => console.log(error)
        )
    
  }

  displayedColumns: string[] = ['id', 'firstName', 'latName', 'title'];
  


  // getEmployees(): void {
  //   this.employeeService.getEmployees()
  //   .subscribe(employees => this.employees = employees);
  // }


}
