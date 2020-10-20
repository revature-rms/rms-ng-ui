import { Component, OnInit } from '@angular/core';
import { Building } from '../dtos/building';
import { Address } from '../dtos/address';
import { BuildingService } from '../services/building.service';
import { Room } from '../dtos/room';
import { RoomStatus } from '../dtos/roomStatus';

import { RoomService } from '../services/room.service';
import { Amenity } from '../dtos/amenity';
import { AmenityService } from '../services/amenity.service';
import { ActivatedRoute } from '@angular/router';







@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})
export class BuildingDetailsComponent implements OnInit {

  buildings: Building[] = [];
  currentBuilding: Building = new Building();
  buildingId: Number;
  rooms: Room[];
  RoomStatus: RoomStatus[];
  address: Address[];
  amenities: Amenity[];
  
  
  

  dataSource: any[] = [];
  displayedColumns: string[] = ['roomNumber', 'maxOccupancy', 'batch'];
  displayedColumnsAmenities: string[] = ['type', 'status'];
  displayedColumnsMetaData: string[] = ['resourceCreator', 'resourceCreationDateTime' , 'lastModifier' , 'lastModifiedDateTime' , 'resourceOwner'];





  constructor(private buildingService: BuildingService, private roomService: RoomService, private amenityService: AmenityService, private route: ActivatedRoute) { 
      this.route.params.subscribe(param => this.getBuildingById(param['id']));
  

  }

  async ngOnInit() {

  }

async getBuildingById(id: Number) {
  await this.buildingService.getBuildingById(id).then(

    res => {
      console.log('get-buildings-successful');
      this.currentBuilding = <Building>res;
      console.log(this.currentBuilding);
      console.log(this.currentBuilding.trainingLead.firstName);
      console.log(this.currentBuilding.address.unitStreet);
      console.log(this.currentBuilding.resourceMetadata);
    },
    err => {
      console.log(err);
    });


  await this.roomService.getRooms().then(
    res => {
      console.log('get-rooms-successful');
      console.log(this.currentBuilding.rooms);
      this.rooms = res;
      
      this.dataSource = this.rooms;
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

