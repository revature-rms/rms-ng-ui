import { Batch } from './batch';
import { ResourceMetadata } from './resourceMetadata';
import { ResourceMetadataDTO } from './resourceMetadataDTO';
import { RoomStatus } from './roomStatus';

export class Room{

    id:Number;
    roomNumber: Number;
    maxOccupancy:Number;
    currentStatus:RoomStatus;
    batch:Batch;
    resourceMetadata: ResourceMetadata;

    

    constructor(id: Number, roomNumber:Number, maxOccupancy:Number, currentStatus:RoomStatus, batch:Batch, resourceMetadata:ResourceMetadata) {
        this.id = id;
        this.roomNumber = roomNumber;
        this.maxOccupancy = maxOccupancy;
        this.currentStatus = currentStatus;
        this.batch = batch;
        this.resourceMetadata = resourceMetadata;
    }
    
}