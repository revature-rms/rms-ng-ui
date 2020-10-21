import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { WorkOrder } from '../dtos/workOrder';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

// TODO: implement open and resolve workorders
export class WorkOrderService {

  workUrl = 'http://localhost:3000/workOrder';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    // getWorkOrder(): Promise<WorkOrder[]> {
    //   return this.http.get<WorkOrder[]>(this.workUrl)
    //   .pipe(
    //     tap(_ => this.log('fetched success')),
    //     catchError(this.handleError<WorkOrder[]>('getWorkOrder', []))).toPromise();
    // }

    



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


