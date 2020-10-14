import { Component, OnInit } from '@angular/core';
import { Batch } from '../dtos/batch';
import { Room } from '../dtos/room';
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
  currentRoom: Room = new Room();
  roomBatch: Batch = new Batch();
  workOrders: WorkOrder[];
  dataSource:any[]=[];
  displayedColumns: string[] = ['id', 'createdDateTime', 'resolvedDateTime', 'category', 'contactEmail', 'creator', 'resolver'];

  constructor(private roomService: RoomService, private workOrderService: WorkOrderService) { }

  async ngOnInit() {

    await this.roomService.getRooms().then(
      res => {
        console.log('get-rooms-successful');
        this.rooms = <Room[]> res;
        this.currentRoom = this.rooms[0];
        this.roomBatch = this.currentRoom.batch;
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

}
