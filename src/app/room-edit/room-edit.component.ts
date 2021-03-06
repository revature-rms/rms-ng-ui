import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Batch } from '../dtos/batch';
import { ResourceMetadataDTO } from '../dtos/resourceMetadataDTO';
import { Room } from '../dtos/room';
import { RoomDTO } from '../dtos/roomDTO';
import { RoomStatus } from '../dtos/roomStatus';
import { WorkOrder } from '../dtos/workOrder';
import { RoomService } from '../services/room.service';
import { WorkOrderService } from '../services/work-order.service';
import { from } from 'rxjs';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})


//TODO: Make a separate page to update work orders.

export class RoomEditComponent implements OnInit {

  rooms: Room[];
  currentRoom: Room;
  roomBatch: Batch = new Batch();
  // workOrders: WorkOrder[];
  currentRoomStatus: RoomStatus[];
  allBatchNames: String[]=[];

  dataSource:any[]=[];
  displayedColumns: string[] = ['id', 'createdDateTime', 'resolvedDateTime', 'category', 'contactEmail', 'creator', 'resolver'];
  displayedColumnsA: string[] = ['id', 'whiteboardCleaned', 'chairsOrdered', 'submittedDateTime', 'submitter', 'otherNotes'];
  
  occupancy = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);

  constructor (private route: ActivatedRoute, private roomService: RoomService, private workOrderService: WorkOrderService, private router: Router) { 
    this.route.params.subscribe(param => this.getRoom(param['id']));
  }

  async ngOnInit() {

  }

async getRoom(id) {
  await this.roomService.getRoomsById(id).then(
    res => {
      console.log('get-rooms-successful');
      this.currentRoom = <Room> res;
      this.currentRoomStatus = <RoomStatus[]> <unknown> this.currentRoom.currentStatus;
      this.roomBatch = this.currentRoom.batch;
      this.allBatchNames.push(this.roomBatch.name);
    },
    err => {
      console.log(err);
    });
//   await this.workOrderService.getWorkOrder().subscribe(
//       res => {
//         console.log('get-work-orders-successful');
//         this.workOrders = res;
//         this.dataSource = this.workOrders;
//       },
//       err => {
//         console.log(err);
//       });
}


  updateRoom() {
    console.log(this.currentRoom.resourceMetadata);

    let updatedRoom = new RoomDTO(this.currentRoom.id, this.currentRoom.roomNumber, this.currentRoom.maxOccupancy, this.currentRoom.currentStatus, this.currentRoom.batch.id);

      this.roomService.update(updatedRoom).subscribe(
        res => {
          console.log('update-rooms-successful');
          this.router.navigate([`/room-details/${this.currentRoom.id}`]);
        },
        err => {
          console.log(err);
        });
  }

  
}
