import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { WorkOrder } from '../dtos/workOrder';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  workUrl = 'http://localhost:3000/workOrder';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    getWorkOrders(): Promise<WorkOrder[]> {
      //might need to add an "open" qualifier
      return this.http.get<WorkOrder[]>(this.workUrl)
      .pipe(
        tap(_ => this.log('fetched success')),
        catchError(this.handleError<WorkOrder[]>('getWorkOrder', []))).toPromise();
    }

    // TO BE IMPLEMENTED = OPEN + RESOLVE WORK ORDERS



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


