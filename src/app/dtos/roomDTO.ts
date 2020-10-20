import { Batch } from './batch';
import { ResourceMetadata } from './resourceMetadata';
import { ResourceMetadataDTO } from './resourceMetadataDTO';
import { RoomStatus } from './roomStatus';

export class RoomDTO{

    id:Number;
    roomNumber: Number;
    maxOccupancy:Number;
    currentStatus:RoomStatus;
    batch:Number;
    // resourceMetadata: ResourceMetadataDTO;

    

    constructor(id: Number, roomNumber:Number, maxOccupancy:Number, currentStatus:RoomStatus, batch:Number, ) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.maxOccupancy = maxOccupancy;
        this.currentStatus = currentStatus;
        this.batch = batch;
    }
    
}