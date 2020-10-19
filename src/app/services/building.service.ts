import { Injectable } from '@angular/core';
import { Building } from '../dtos/building';
import { observable, Observable, of } from 'rxjs';
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

  private buildingUrl='http://18.209.24.94:10001/v2/building';


  constructor(private http: HttpClient , 
    private messageService: MessageService) { }

  getBuildings(): Promise<Building[]>{
    return this.http.get<Building[]>(this.buildingUrl).toPromise();
  }

  getBuildingById(id): Promise<Building[]>{
    return this.http.get<Building[]>(`${this.buildingUrl}/id/${id}`).toPromise();
  }

  editBuilding(Building): Promise<Building>{
    return this.http.put<Building>(this.buildingUrl, Building).toPromise();
  }

  update(building): Promise<Building> {
    return this.http.put<Building>('http://localhost:10001/campuses/buildings', building).toPromise();
  }


}
