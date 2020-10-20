import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Batch } from '../dtos/batch';
import { Department } from '../dtos/Department';
import { Employee } from '../dtos/employee';
import { EmployeeDTO } from '../dtos/EmployeeDTO';
import { Room } from '../dtos/room';
import { RoomStatus } from '../dtos/roomStatus';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit {

  constructor (private route: ActivatedRoute, private employeeService: EmployeeService) { 
    this.route.params.subscribe(param => this.getEmployee(param['id']));
  }

  ngOnInit(): void {
  }

  employee: Employee;

  dataSource:any[]=[];
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'title'];
  
  email = new FormControl('', [Validators.required]);
  roomNumber = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);

async getEmployee(id) {
  await this.employeeService.getEmployeeById(id).then(
    res => {
      console.log('get-rooms-successful');
      this.employee = <Employee> res;
    },
    err => {
      console.log(err);
    });
}


  updateEmployee() {
    let updatedEmployee = new EmployeeDTO();
    updatedEmployee.id = this.employee.id;
    updatedEmployee.firstName = this.employee.firstName;
    updatedEmployee.lastName = this.employee.lastName;
    updatedEmployee.email = this.employee.email;
    updatedEmployee.title = this.employee.title;
    updatedEmployee.department =  this.employee.department.toUpperCase();

    console.log(updatedEmployee);


      this.employeeService.update(updatedEmployee, this.employee.id).then(
        res => {
          console.log('update-employee-successful');
        },
        err => {
          console.log(err);
        });
  }

}
