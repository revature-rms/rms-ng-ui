import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Room } from '../dtos/room';
import { MessageService } from './message.service';
import { Amenity } from '../dtos/amenity';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})

//TODO: ensure this works with future backend implementation
export class AmenityService {
  private amenityUrl = 'http://localhost:3000/amenity';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    getAmenities(): Promise<Amenity[]> {
    return this.http.get<Amenity[]>(this.amenityUrl).toPromise();
  }

}
