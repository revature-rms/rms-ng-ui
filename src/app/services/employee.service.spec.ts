//default
import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
//additional
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { defer } from 'rxjs';
import { Employee } from '../dtos/employee';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClientSpy: { get: jasmine.Spy };
  let httpClientSpyPut: { put: jasmine.Spy }; //originally for debugging; doesn't work
  let httpClientSpyPost: { post: jasmine.Spy };
  let httpClientSpyDelete: { delete: jasmine.Spy };
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    httpClientSpyPut = jasmine.createSpyObj('HttpClient', ['put']);
    httpClientSpyPost = jasmine.createSpyObj('HttpClient', ['post']);
    httpClientSpyDelete = jasmine.createSpyObj('HttpClient', ['delete']);
    service = new EmployeeService(httpClientSpy as any, MessageService as any); //mock service
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  //EXISTENCE TEST ========================================
  it('should be created', () => {
    expect(service).toBeTruthy();
  });



  //getEmployees() ------------------------------------------
  it('should return all employee data', () => {
    var expectedData: Employee[] =
    [{
      id:1,
      firstName:'string',
      lastName:'string',
      email:'string',
      title:'string',
      department:'string',
      resourceMetadata:null
    },
    {
      id:2,
      firstName:'string2',
      lastName:'string2',
      email:'string2',
      title:'string2',
      department:'string2',
      resourceMetadata:null
    }]
    httpClientSpy.get.and.returnValue(asyncData(expectedData)); //setup the server response
    service.getemployees().then( 
      data => expect(data).toEqual(expectedData, 'expected all employees')
    );

    //some bonus check to see how many http calls went through
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  //getEmployeeById() ------------------------------------------
  it('should return target employee data', () => {
    var expectedData: Employee[] =
    [{
      id:1,
      firstName:'string',
      lastName:'string',
      email:'string',
      title:'string',
      department:'string',
      resourceMetadata:null
    },
    {
      id:2,
      firstName:'string2',
      lastName:'string2',
      email:'string2',
      title:'string2',
      department:'string2',
      resourceMetadata:null
    }]
    httpClientSpy.get.and.returnValue(asyncData(expectedData[0])); //setup the server response
    service.getEmployeeById(1).then( 
      data => expect(data).toEqual(expectedData[0], 'expected target employee by ID')
    );

    //bonus check to see how many http calls went through
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });


  //Check notes at end of file for explanations
  //create(employee) ------------------------------------------TODO: find a better solution
  it('should create employee', () => {
    let newPeon:Employee = {
      id:null,
      firstName:'string3',
      lastName:'string3',
      email:'string3',
      title:'string3',
      department:'string3',
      resourceMetadata:null
    }

    let resp = employeePosttest(newPeon); //mock http req
    expect(resp.body).toEqual(newPeon, 'expected returned employee object');
    expect(resp.body.id).toEqual(newPeon.id, 'expected employee with updated ID');
    expect(resp.status).toEqual(201, 'expected created status');

  });

  // update(employee) ------------------------------------------TODO: find a better solution
  it('should update employee', () => {
    let newPeon:Employee = {
      id:3,
      firstName:'string3',
      lastName:'string3',
      email:'string3',
      title:'string3',
      department:'string3',
      resourceMetadata:null
    }

    let resp = employeePuttest(newPeon);
    expect(resp.body).toEqual(newPeon, 'expected returned employee object');
    expect(resp.status).toEqual(200, 'expected confirmed status');
  });

  //ERROR 404 TEST
  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 Not Found',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    service.getemployees().then(
      data => fail('expected an error, not data'),
      error  => expect(error.message).toContain('404 Not Found')
    );
    
    expect(1).toEqual(1);
  });

});


// helper functions      ------------------------------
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}
//mocking service methods------------------------------
  //since this.http.post is apparently not a thing,
    //and that somehow it was an illusion all along

function employeePuttest(peon: Employee ){
  //reevaluate based on backend response json
  return new HttpResponse(
    { status: 200, statusText: 'OK', body: peon });
}

function employeePosttest(peon: Employee ){
  //the server may reply with an object + new ID
  peon.id = 1;
  return new HttpResponse(
    { status: 201, statusText: 'CREATED', body: peon });
}

//NOTES:

//httpClientSpy.post.and.returnValue(asyncData(expectedData)); //this.http.post is not a function
//For some reason, the post/put/delete methods don't work in the same way the get methods do
//for the time being, we're just using a function to return the expected data
  //which was already what the httpclientspy was doing in the first place
    //only jasmine cries about it just a little bit less
//Referenced with following angular examples:
  //https://stackblitz.com/angular/dmjlxyljaqm?file=src%2Fapp%2Fmodel%2Ftesting%2Ftest-hero.service.ts
  //https://stackblitz.com/angular/oembpkqkdje?file=src%2Ftesting%2Fhttp-client.spec.ts
    //fun fact: these examples implement spy get methods, but not post/put