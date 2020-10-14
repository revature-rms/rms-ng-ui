import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Room } from '../dtos/room';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private roomUrl = 'http://localhost:3000/Room';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    getRooms(): Promise<Room[]> {
      return this.http.get<Room[]>(this.roomUrl).toPromise();
    }
    
    getRoomById(id) {
      return this.http.get(`${this.roomUrl}/id/${id}`);
    }

    update(id, room) {
      return this.http.put(`${this.roomUrl}`, room);
    }
    
    //  this is not accurate to the MSA controllers, need more info
    // assignBatchToRoom(name) {
    //   return this.http.get(`${this.roomUrl}?title=${name}`);
    // }
    
    
    delete(id) {
      return this.http.delete(`${this.roomUrl}/${id}`);
    }
    
    deleteAll() {
      return this.http.delete(this.roomUrl);
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