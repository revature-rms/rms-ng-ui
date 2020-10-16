import { Component, OnInit } from '@angular/core';
import { Building } from '../dtos/building';
import {Campus} from '../dtos/campus'
import {CampusService} from '../services/campus.service';

@Component({
  selector: 'app-campus-detail-view',
  templateUrl: './campus-detail-view.component.html',
  styleUrls: ['./campus-detail-view.component.scss']
})
export class CampusDetailViewComponent implements OnInit {

   dataSource:Building[]=[];
   campuses:Campus[]=[];

  constructor(private campusService:CampusService) { }

  ngOnInit(): void {
    this.getCampus();
  }

  async getCampus(){
    await this.campusService.getCampus().subscribe
    (
      (response)=>
      {
        this.campuses = response as Campus[];
        this.dataSource = this.campuses[0].buildings;
        console.log("this is campus detail")
        console.log(this.campuses);
        console.log(this.dataSource);
      },
      (error) => console.log(error)
    )
  
  }

  displayedColumns: string[] = ['name', 'address', 'trainingLead', 'amenities', 'rooms'];

}
