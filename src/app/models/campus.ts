import { address } from './address';
import { building } from './building';
import { employee } from './employee';
import { resourceMetadata } from './resourceMetadata';

export class campus{

    id:Number;
    name:String;
    abbrName:String;
    shippingAddress:address;
    trainingManager:employee;
    stagingManager:employee;
    hrLead:employee;
    buildings:Array<building>; //of buildings
    corporateEmployees:Array<employee>;
    resourceMetadata:resourceMetadata;
}