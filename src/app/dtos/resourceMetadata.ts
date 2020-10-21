import { AppUser } from './appUser';
import { Employee } from './employee';

export class ResourceMetadata{

    resourceCreator:AppUser;
    resourceCreationDateTime:Date;
    lastModifier:AppUser
    lastModifiedDateTime:Date;
    resourceOwner:AppUser;
    currentlyActive:Boolean;

}