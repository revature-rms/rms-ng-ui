import { Employee } from './employee';

export class ResourceMetadata{

    resourceCreator:Employee;
    resourceCreationDateTime:Date;
    lastModifier:Employee
    lastModifiedDateTime:Date;
    resourceOwner:Employee;
    currentlyActive:Boolean;

}