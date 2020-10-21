import { Address } from './address';
import { Amenity } from './amenity';
import { ResourceMetadata } from './resourceMetadata';
import { Room } from './room';

export class BuildingDTO{

    id:Number;
    name:String;
    abbrName:String;
    physicalAddress:Address;
    trainingLead:Number; //string of id

}