import { Component, OnInit } from '@angular/core';
import { Batch } from '../dtos/batch';
import { Room } from '../dtos/room';
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
  roomBatch: Batch;
  workOrders: WorkOrder[];
  dataSource:any[]=[];
  displayedColumns: string[] = ['id', 'createdDateTime', 'resolvedDateTime', 'category', 'contactEmail', 'creator', 'resolver'];

  constructor(private roomService: RoomService, private workOrderService: WorkOrderService) { }

  async ngOnInit() {

    this.roomService.getRooms().subscribe(
      res => {
        console.log('get-rooms-successful');
        this.rooms = res;
        this.currentRoom = this.rooms[0];
        this.roomBatch = this.currentRoom.batch;
      },
      err => {
        console.log(err);
      });

    this.workOrderService.getWorkOrder().subscribe(
        res => {
          console.log('get-work-orders-successful');
          this.workOrders = res;
          this.dataSource = this.workOrders;
        },
        err => {
          console.log(err);
        });
  
  }





}
