import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Building } from '../dtos/building';
import {Campus} from '../dtos/campus'
import {CampusService} from '../services/campus.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';


// TODO: Building table and access
// TODO: Campus editing such as Adding and deleting 


@Component({
  selector: 'app-campus-detail-view',
  templateUrl: './campus-detail-view.component.html',
  styleUrls: ['./campus-detail-view.component.scss']
})

export class CampusDetailViewComponent implements OnInit, AfterViewInit{

  dataSource:MatTableDataSource<Building>;
  campuses:Campus;
  buildingId: Number;

  constructor(private route: ActivatedRoute, private campusService:CampusService) {
    this.route.params.subscribe(param => this.getCampus(param['id']));
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit(){
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  async getCampus(id: number){
    await this.campusService.getCampusById(id).subscribe
    (
      (response)=>
      {
        this.campuses = response as Campus;
        this.dataSource = new MatTableDataSource(this.campuses.buildings);
        
      },
      (error) => console.log(error)
    )
  
  }

  displayedColumns: string[] = ['id', 'name', 'address', 'trainingLead', 'build3', 'build4'];

}
