import { Component, OnInit } from '@angular/core';
import { Building } from '../dtos/building';
import { Address } from '../dtos/address';
<<<<<<< HEAD
=======
import { Employee } from '../dtos/employee';
>>>>>>> 99830b1c11fd7793b8bacdbb2b209e302f34f715
import { BuildingService } from '../services/building.service';
import { Room } from '../dtos/room';
import { RoomStatus } from '../dtos/roomStatus';
import { FormControl, Validators } from '@angular/forms';

import { RoomService } from '../services/room.service';
import { Amenity } from '../dtos/amenity';
import { AmenityService } from '../services/amenity.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BuildingDTO } from '../dtos/buildingDTO';



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


  constructor(private buildingService: BuildingService, private roomService: RoomService, private amenityService: AmenityService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(param => this.getBuilding(param['id']));
  }

  async ngOnInit() {

  }

  async getBuilding(id: Number) {
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


  updateBuilding(){
    console.log(this.currentBuilding.name);

    let updatedBuilding = new BuildingDTO();
    updatedBuilding.id = this.currentBuilding.id;
    updatedBuilding.name = this.currentBuilding.name;
    updatedBuilding.abbrName = this.currentBuilding.abbrName;
    updatedBuilding.physicalAddress = this.currentBuilding.address;
    updatedBuilding.trainingLead = this.currentBuilding.trainingLead.id;

    this.buildingService.update(updatedBuilding).then(
      res => {
        console.log('update building succesful');
        this.router.navigate([`/building-details/${this.currentBuilding.id}`]);
      }, 
      err => {
        console.log(err);
      }
    )
  }

}
