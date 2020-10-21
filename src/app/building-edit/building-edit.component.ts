import { Component, OnInit } from '@angular/core';
import { Building } from '../dtos/building';
import { Address } from '../dtos/address';
import { Employee } from '../dtos/employee';
import { BuildingService } from '../services/building.service';
import { Room } from '../dtos/room';
import { RoomStatus } from '../dtos/roomStatus';
import { FormControl, Validators } from '@angular/forms';

import { RoomService } from '../services/room.service';
import { Amenity } from '../dtos/amenity';
import { AmenityService } from '../services/amenity.service';



@Component({
  selector: 'app-building-edit',
  templateUrl: './building-edit.component.html',
  styleUrls: ['./building-edit.component.scss']
})
export class BuildingEditComponent implements OnInit {

  
  buildings: Building[];
  currentBuilding: Building = new Building();
  rooms: Room[];
  RoomStatus: RoomStatus[];
  address: Address[];
  amenities: Amenity[];

  dataSource: any[] = [];
  displayedColumns: string[] = ['roomNumber', 'maxOccupancy', 'currentStatus'];
  displayedColumnsAmenities: string[] = ['type', 'status'];

  buildingName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  abbrName = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);
  physicalAddress = new FormControl('', [Validators.required, Validators.pattern("[A-Z]{1,2}[0-9][0-9A-Z]?\\s?[0-9][A-Z]{2}")]);

  trainingLead = new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]);


  constructor(private buildingService: BuildingService, private roomService: RoomService, private amenityService: AmenityService) { }

  async ngOnInit() {

    await this.buildingService.getBuildings().then(

      res => {
        console.log('get-buildings-successful');
        console.log(this.currentBuilding.trainingLead);
        console.log(this.currentBuilding.physicalAddress);
        this.buildings = <Building[]>res;
        this.currentBuilding = this.buildings[0];

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

      await this.amenityService.getAmenities().then(
        res => {
          console.log('get-amenities-successful');
          this.amenities = res;
          this.dataSource = this.amenities;
        },
        err => {
          console.log(err);
        });

  }


  updateBuilding(){
    console.log(this.currentBuilding.name);

    let updatedBuilding = new Building();

    this.buildingService.update(updatedBuilding).then(
      res => {
        console.log('update building succesful');
      }, 
      err => {
        console.log(err);
      }
    )
  }

}
