import { employee } from './employee';


export class workOrder{

    id:Number;
    createdDateTime:String;
    resolvedDateTime:String;
    category:String;
    description:String;
    contactEmail:String;
    creator:employee;
    resolver:employee;


}