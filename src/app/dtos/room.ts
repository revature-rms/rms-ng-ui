import { Batch } from './batch';
import { RoomStatus } from './roomStatus';

export class Room{

    id:Number;
    roomNumber:String;
    maxOccupancy:Number;
    currentStatus:String;
    batch:Batch;

}