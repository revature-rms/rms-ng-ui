import { Injectable } from '@angular/core';
import { Building } from '../dtos/building';
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  building:Building;

  private buildingUrl='http://localhost:3000/building';


  constructor(private http: HttpClient , 
    private messageService: MessageService) { }

    getBuildings(): Promise<Building[]>{
      return this.http.get<Building[]>(this.buildingUrl).toPromise();
    }
}
