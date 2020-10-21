import { Injectable } from '@angular/core';
import {Employee} from "../dtos/employee";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {MESSAGETEXTS} from '../const/MessageConsts';
// import {Result} from '../dtos/Result';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:Employee;

  private employeeUrl = 'http://localhost:10000/search/employees';
  private employeeUpdateUrl = 'http://localhost:10002/employees';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

getemployees(): Observable<Employee[]>{
  return this.http.get<Employee[]>(this.employeeUrl);
}

getEmployeeById(id): Promise<Employee>{
  return this.http.get<Employee>(`${this.employeeUrl}/id/${id}`).toPromise();
}

update(employee) {
  return this.http.put(`${this.employeeUpdateUrl}`, JSON.stringify(employee), httpOptions).toPromise();
}

// create(employee) {
//   return this.http.post(this.employeeUrl, employee);
// }

// delete(id) {
//   return this.http.delete(`${this.employeeUrl}/${id}`);
// }

// deleteAll() {
//   return this.http.delete(this.employeeUrl);
// }

// findByTitle(title) {
//   return this.http.get(`${this.employeeUrl}?title=${title}`);
// }




}