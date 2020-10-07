import { Injectable } from '@angular/core';
import {Employee} from "../dtos/Employee";
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {MESSAGETEXTS} from '../const/MessageConsts';
import {Result} from '../dtos/Result';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeeUrl = 'http://localhost:3000/Employee';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    getEmployees(): Observable<Employee[]> {
      return this.http.get<Employee[]>(this.employeeUrl)
      .pipe(
        tap(_ => this.log('fetched success')),
        catchError(this.handleError<Employee[]>('getEmployees', [])));
    }
    


    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
    
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }


}