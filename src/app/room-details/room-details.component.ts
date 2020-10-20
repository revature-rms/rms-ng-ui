import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
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
  currentRoom: Room;
  roomBatch: Batch = new Batch();
  currentRoomStatus: RoomStatus[];
  workOrders: WorkOrder[];
  dataSource:any[]=[];
  displayedColumns: string[] = ['id', 'createdDateTime', 'resolvedDateTime', 'category', 'contactEmail', 'creator', 'resolver'];
  displayedColumnsA: string[] = ['id', 'whiteboardCleaned', 'chairsOrdered', 'submittedDateTime', 'submitter', 'otherNotes'];


  constructor(private route: ActivatedRoute, private roomService: RoomService) { 
    this.route.params.subscribe(param => this.getRoom(param['id']));
  }

  async ngOnInit() {
  
  }

  async getRoom(id: Number) {
    await this.roomService.getRoomsById(id).then(
      res => {
        console.log('get-rooms-successful');
        this.currentRoom = <Room> res;
        console.log(this.currentRoom);
        this.currentRoomStatus = <RoomStatus[]> <unknown> this.currentRoom.currentStatus;
        this.roomBatch = this.currentRoom.batch;
      },
      err => {
        console.log(err);
      });

    // await this.workOrderService.getWorkOrder().then(
    //     res => {
    //       console.log('get-work-orders-successful');
    //       this.workOrders = res;
    //       this.dataSource = this.workOrders;
    //     },
    //     err => {
    //       console.log(err);
    //     });
  }




}
