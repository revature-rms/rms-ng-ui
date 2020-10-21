import { Employee } from './Employee';


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