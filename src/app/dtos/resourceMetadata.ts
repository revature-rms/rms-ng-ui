import { AppUser } from './appUser';

export class ResourceMetadata{

    resourceCreator:AppUser;
    resourceCreationDateTime:Date;
    lastModifier:AppUser
    lastModifiedDateTime:Date;
    resourceOwner:AppUser;
    currentlyActive:Boolean;

}