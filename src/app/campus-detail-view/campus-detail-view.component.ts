import { Component, OnInit } from '@angular/core';
import { Building } from '../dtos/building';
import {Campus} from '../dtos/campus'
import {CampusService} from '../services/campus.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-campus-detail-view',
  templateUrl: './campus-detail-view.component.html',
  styleUrls: ['./campus-detail-view.component.scss']
})
export class CampusDetailViewComponent implements OnInit {

  dataSource:Building[]=[];
  campuses:Campus;
  buildingId: Number;

  constructor(private route: ActivatedRoute, private campusService:CampusService) {
    this.route.params.subscribe(param => this.getCampus(param['id']));
  }

  ngOnInit(): void {


  }

  async getCampus(id: number){
    await this.campusService.getCampusById(id).subscribe
    (
      (response)=>
      {
        this.campuses = response as Campus;
        this.dataSource = this.campuses.buildings;
        console.log("this is campus detail")
        console.log(this.campuses);
        console.log(this.dataSource);
      },
      (error) => console.log(error)
    )
  
  }

  displayedColumns: string[] = ['id', 'name', 'address', 'trainingLead', 'build3', 'build4'];

}
