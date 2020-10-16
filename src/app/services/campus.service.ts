import { Injectable } from '@angular/core';
import {Campus} from '../dtos/campus';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { MessageService } from './message.service';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CampusService {


  campus:Campus;

  private campusUrl = 'http://localhost:10000/search/campuses';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }


    getCampus(){
      return this.http.get(this.campusUrl);
    }
}
