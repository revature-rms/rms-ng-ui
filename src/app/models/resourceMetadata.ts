import { employee } from './employee';

export class resourceMetadata{

    resourceCreator:employee;
    resourceCreationDateTime:String;
    lastModifier:employee
    lastModifiedDateTime:String;
    resourceOwner:employee;
    currentlyActive:Boolean;

}