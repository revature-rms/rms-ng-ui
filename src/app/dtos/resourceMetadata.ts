import { Employee } from './employee';

export class ResourceMetadata{

    resourceCreator:Employee;
    resourceCreationDateTime:String;
    lastModifier:Employee
    lastModifiedDateTime:String;
    resourceOwner:Employee;
    currentlyActive:Boolean;

}