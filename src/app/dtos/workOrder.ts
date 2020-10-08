import { Employee } from './employee';


export class WorkOrder{

    id:Number;
    createdDateTime:String;
    resolvedDateTime:String;
    category:String;
    description:String;
    contactEmail:String;
    creator:Employee;
    resolver:Employee;


}