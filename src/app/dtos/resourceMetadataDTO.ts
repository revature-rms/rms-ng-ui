import { Employee } from './employee';

export class ResourceMetadataDTO{

    resourceCreator:Number;
    resourceCreationDateTime:String;
    lastModifier:Number
    lastModifiedDateTime:String;
    resourceOwner:Number;

    constructor (resourceCreator: Number, resourceCreationDateTime: String, lastModifier:Number, lastModifiedDateTime:String, resourceOwner:Number) {
        this.resourceCreator = resourceCreator;
        this.resourceCreationDateTime = resourceCreationDateTime;
        this.lastModifier = lastModifier
        this.lastModifiedDateTime = lastModifiedDateTime;
        this.resourceOwner = resourceOwner;
    }

}