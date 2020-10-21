import { Address } from './address';
import { Amenity } from './amenity';
import { Employee } from './Employee';
import { ResourceMetadata } from './resourceMetadata';
import { Room } from './room';

export class Building{

    id:Number;
    name:String;
    abbrName:String;
    address:Address;
    trainingLead:Employee; //or user
    amenities:Array<Amenity>; //of strings?
    rooms:Array<Room>; //of rooms?
    resourceMetadata:ResourceMetadata;

}