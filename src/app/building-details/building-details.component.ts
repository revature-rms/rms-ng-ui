import { Component, OnInit } from '@angular/core';
import { Building } from '../dtos/building';
import { Address } from '../dtos/address';
import { Employee } from '../dtos/Employee';
import { BuildingService } from '../services/building.service';
import { Room } from '../dtos/room';
import { RoomService } from '../services/room.service';
import { Amenity } from '../dtos/amenity';
import { AmenityService } from '../services/amenity.service';







@Component({
  selector: 'app-building-details',
  templateUrl: './building-details.component.html',
  styleUrls: ['./building-details.component.scss']
})
export class BuildingDetailsComponent implements OnInit {

  buildings: Building[] = [];
  currentBuilding: Building = new Building();
  rooms: Room[];
  address: Address[];
  amenities: Amenity[];

  dataSource: any[] = [];
  displayedColumns: string[] = ['roomNumber', 'maxOccupancy', 'currentStatus'];
  displayedColumnsAmenities: string[] = ['type', 'status'];




  constructor(private buildingService: BuildingService, private roomService: RoomService, private amenityService: AmenityService) { }

  async ngOnInit() {

    await this.buildingService.getBuildings().then(

      res => {
        console.log('get-buildings-successful');
        this.buildings = <Building[]>res;
        this.currentBuilding = this.buildings[0];

      },
      err => {
        console.log(err);
      });


    await this.roomService.getRooms().then(
      res => {
        console.log('get-rooms-successful');
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


}

