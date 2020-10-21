import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Room } from '../dtos/room';
import { RoomDTO } from '../dtos/roomDTO';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  // private roomUrl = 'http://localhost:3000/Room';
  private roomUrl = 'http://34.235.133.222:8080/search/search/rooms';
  private roomByCampusURL = 'http://34.235.133.222:8080/campuses/rooms'

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    getRooms(): Promise<Room[]> {
      return this.http.get<Room[]>(this.roomUrl, httpOptions).toPromise();
    }
    
    getRoomsById(id: Number): Promise<Room> {
      return this.http.get<Room>(`${this.roomUrl}/id/${id}`).toPromise();
    }

    update(room: RoomDTO){
      return this.http.put('http://34.235.133.222:8080/campuses/rooms', room);
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