import { employee } from './employee';
import { resourceMetadata } from './resourceMetadata';

export class batch{

    id:Number;
    name:String;
    trainer:employee; //array of usernames? or users
    coTrainer:employee;
    associates:Array<employee>;
    startDate:String;
    endDate:String;
    curriculum:String;
    resourceMetadata:resourceMetadata;

}