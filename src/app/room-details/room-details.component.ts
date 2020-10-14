import { Component, OnInit } from '@angular/core';
import { Batch } from '../dtos/batch';
import { Room } from '../dtos/room';
import { RoomStatus } from '../dtos/roomStatus';
import { WorkOrder } from '../dtos/workOrder';
import { RoomService } from '../services/room.service';
import { WorkOrderService } from '../services/work-order.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  rooms: Room[];
  currentRoom: Room = new Room();
  roomBatch: Batch = new Batch();
  currentRoomStatus: RoomStatus[];
  workOrders: WorkOrder[];
  dataSource:any[]=[];
  displayedColumns: string[] = ['id', 'createdDateTime', 'resolvedDateTime', 'category', 'contactEmail', 'creator', 'resolver'];
  displayedColumnsA: string[] = ['id', 'whiteboardCleaned', 'chairsOrdered', 'submittedDateTime', 'submitter', 'otherNotes'];

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
      },
      err => {
        console.log(err);
      });

<<<<<<< HEAD
    // await this.workOrderService.getWorkOrder().then(
    //     res => {
    //       console.log('get-work-orders-successful');
    //       this.workOrders = res;
    //       this.dataSource = this.workOrders;
    //     },
    //     err => {
    //       console.log(err);
    //     });
=======
    await this.workOrderService.getWorkOrders().then(
        res => {
          console.log('get-work-orders-successful');
          this.workOrders = res;
          this.dataSource = this.workOrders;
        },
        err => {
          console.log(err);
        });
>>>>>>> beceebda9e22e651a18c690e568fdf907153f4a6
  
  }





}
