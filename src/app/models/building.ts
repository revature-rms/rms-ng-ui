import { address } from './address';
import { amenity } from './amenity';
import { employee } from './employee';
import { resourceMetadata } from './resourceMetadata';
import { room } from './room';

export class building{

    id:Number;
    name:String;
    abbrName:String;
    physicalAddress:address;
    trainingLead:employee; //or user
    amenities:Array<amenity>; //of strings?
    rooms:Array<room>; //of rooms?
    resourceMetadata:resourceMetadata;

}