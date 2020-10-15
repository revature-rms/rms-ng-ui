import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Amenity } from '../dtos/amenity';
import { Batch } from '../dtos/batch';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BatchService {

  private batchUrl = 'http://localhost:3000/batch';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  //fix w proper url
  getBatches(): Promise<Batch[]> {
    return this.http.get<Batch[]>(this.batchUrl).toPromise();
  }

  getBatchById(id): Promise<Batch> {
    return this.http.get<Batch>(`${this.batchUrl}/id/${id}`).toPromise();
  }

  editBuilding(Batch): Promise<Batch>{
    return this.http.put<Batch>(this.batchUrl, Batch).toPromise();
  }

}