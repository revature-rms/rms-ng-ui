import { Employee } from './Employee';
import { ResourceMetadata } from './resourceMetadata';

export class Batch{

    id:Number;
    name:String;
    trainer:Employee; //array of usernames? or users
    coTrainer:Employee;
    associates:Array<Employee>;
    startDate:String;
    endDate:String;
    curriculum:String;
    resourceMetadata:ResourceMetadata;

}