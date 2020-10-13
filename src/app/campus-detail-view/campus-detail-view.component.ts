import { Component, OnInit } from '@angular/core';
import {Campus} from '../dtos/campus'
import {CampusService} from '../services/campus.service';

@Component({
  selector: 'app-campus-detail-view',
  templateUrl: './campus-detail-view.component.html',
  styleUrls: ['./campus-detail-view.component.scss']
})
export class CampusDetailViewComponent implements OnInit {

   dataSource:any[]=[];
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
        console.log("this is campus detail")
        console.log(this.campuses);
        console.log(this.dataSource);
      },
      (error) => console.log(error)
    )
  
  }

  displayedColumns: string[] = ['id', 'build1', 'build2', 'build3'];

}
