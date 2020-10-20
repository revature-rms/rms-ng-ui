import { Department } from './Department';
import { ResourceMetadataDTO } from "./resourceMetadataDTO";

export class EmployeeDTO {

    
    id:Number;
    firstName:string;
    lastName:string;
    email:string;
    title:string;
    department:String;

    cosntructor(id:Number,
        firstName:string,
        lastName:string,
        email:string,
        title:string,
        department:String) {
            this.id = id;
            this.firstName = firstName;
            this.department = department;
            this.lastName = lastName;
            this.email = email;
            this.title = title;
            this.department = department;
        }

}


