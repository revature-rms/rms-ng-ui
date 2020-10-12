import { Injectable } from '@angular/core';
import {Employee} from "../dtos/employee";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:Employee;

  private employeeUrl = 'http://localhost:3000/Employee';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

getemployees(){
  return this.http.get(this.employeeUrl);
}

getEmployeeBy(id) {
  return this.http.get(`${this.employeeUrl}/${id}`);
}

create(employee) {
  return this.http.post(this.employeeUrl, employee);
}

update(id, employee) {
  return this.http.put(`${this.employeeUrl}/${id}`, employee);
}

delete(id) {
  return this.http.delete(`${this.employeeUrl}/${id}`);
}

deleteAll() {
  return this.http.delete(this.employeeUrl);
}

findByTitle(title) {
  return this.http.get(`${this.employeeUrl}?title=${title}`);
}




}