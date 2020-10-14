import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Batch } from '../dtos/batch';
import { Room } from '../dtos/room';
import { RoomStatus } from '../dtos/roomStatus';
import { WorkOrder } from '../dtos/workOrder';
import { RoomService } from '../services/room.service';
import { WorkOrderService } from '../services/work-order.service';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.scss']
})
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
  roomNumber = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);

  constructor(private roomService: RoomService, private workOrderService: WorkOrderService) { }

  async ngOnInit() {

    await this.roomService.getRooms().then(
      res => {
        console.log('get-rooms-successful');
        this.rooms = <Room[]> res;
        this.currentRoom = this.rooms[0];
        this.currentRoomStatus = <RoomStatus[]> <unknown> this.currentRoom.currentStatus;
        console.log(this.currentRoomStatus);
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
    console.log(this.currentRoom.roomNumber);
    console.log(this.currentRoom.maxOccupancy);

    let updatedRoom = new Room(this.currentRoom.id, this.currentRoom.roomNumber, this.currentRoom.maxOccupancy, this.currentRoom.currentStatus, this.currentRoom.batch);

      this.roomService.update(updatedRoom).then(
        res => {
          console.log('update-rooms-successful');
        },
        err => {
          console.log(err);
        });
  }

  
}
