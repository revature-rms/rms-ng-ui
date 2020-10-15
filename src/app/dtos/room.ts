import { Batch } from './batch';
import { RoomStatus } from './roomStatus';

export class Room{

    id:Number;
    roomNumber:String;
    maxOccupancy:Number;
    currentStatus:RoomStatus;
    batch:Batch;

    

    constructor(id: Number, roomNumber:String, maxOccupancy:Number, currentStatus:RoomStatus, batch:Batch) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.maxOccupancy = maxOccupancy;
        this.currentStatus = currentStatus;
        this.batch = batch;
    }
    
}