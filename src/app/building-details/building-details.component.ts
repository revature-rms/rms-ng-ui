import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Building } from '../dtos/building';
import { Address } from '../dtos/address';
import { Employee } from '../dtos/employee';
import { BuildingService } from '../services/building.service';
import { Room } from '../dtos/room';
import { RoomStatus } from '../dtos/roomStatus';

import { RoomService } from '../services/room.service';
import { Amenity } from '../dtos/amenity';
import { AmenityService } from '../services/amenity.service';
import { ActivatedRoute } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';







@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})
export class BuildingDetailsComponent {

  currentBuilding: Building = new Building();
  buildingId: Number;
  rooms: Room[];
  RoomStatus: RoomStatus[];
  address: Address[];
  amenities: Amenity[];
  
  
  

  dataSource: MatTableDataSource<Room>;
  displayedColumns: string[] = ['roomNumber', 'maxOccupancy', 'batch'];
  displayedColumnsAmenities: string[] = ['type', 'status'];
  displayedColumnsMetaData: string[] = ['resourceCreator', 'resourceCreationDateTime' , 'lastModifier' , 'lastModifiedDateTime' , 'resourceOwner'];

  @ViewChild(MatSort) sort: MatSort;



  constructor(private buildingService: BuildingService, private roomService: RoomService, private amenityService: AmenityService, private route: ActivatedRoute) { 
      this.route.params.subscribe(param => this.getBuildingById(param['id']));
  

  }


  ngOnInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

async getBuildingById(id: Number) {
  await this.buildingService.getBuildingById(id).then(

    res => {
      console.log('get-buildings-successful');
      this.currentBuilding = <Building>res;
      
    },
    err => {
      console.log(err);
    });


  await this.roomService.getRooms().then(
    res => {
      console.log('get-rooms-successful');
      this.rooms = res;
      
      this.dataSource = new MatTableDataSource(this.rooms);
      this.dataSource.sort = this.sort;
    },
    err => {
      console.log(err);
    });

    
      // await this.amenityService.getAmenities().then(
      //   res => {
      //     console.log('get-amenities-successful');
      //     this.amenities = res;
      //     this.dataSource = this.amenities;
      //   },
      //   err => {
      //     console.log(err);
      //   });
}


}

