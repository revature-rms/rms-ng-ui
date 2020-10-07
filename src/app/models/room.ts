import { batch } from './batch';

export class room{

    id:Number;
    roomNumber:String;
    maxOccupancy:Number;
    currentStatus:String;
    batch:batch;

}