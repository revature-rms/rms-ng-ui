import { Address } from './address';
import { Building } from './building';
import { Employee } from './Employee';
import { ResourceMetadata } from './resourceMetadata';

export class Campus{

    id:Number;
    name:String;
    abbrName:String;
    shippingAddress:Address;
    trainingManager:Employee;
    stagingManager:Employee;
    hrLead:Employee;
    buildings:Array<Building>; //of buildings
    corporateEmployees:Array<Employee>;
    resourceMetadata:ResourceMetadata;
}