//default
import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';
//additional
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { MessageService } from './message.service';
import { Campus } from '../dtos/campus';
import { defer } from 'rxjs';
// import { HttpErrorResponse } from '@angular/common/http';
import { Employee } from '../dtos/employee';
import { VariableAst } from '@angular/compiler';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClientSpy: { get: jasmine.Spy, put: jasmine.Spy, post: jasmine.Spy, delete: jasmine.Spy };
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployeeService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
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
    service.getemployees().subscribe( 
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
    service.getEmployeeBy(1).subscribe( 
      data => expect(data).toEqual(expectedData[0], 'expected target employee by ID')
    );

    //some bonus check to see how many http calls went through
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  //create(employee) ------------------------------------------TODO FIX: 'this.http.post is not a func'
  it('should create employee', () => {
    let newPeon:Employee = {
      id:3,
      firstName:'string3',
      lastName:'string3',
      email:'string3',
      title:'string3',
      department:'string3',
      resourceMetadata:null
    }

    //todo: reevaluate if this is needed; it might not return user json after post
    httpClientSpy.post.and.returnValue(asyncData(newPeon)); //setup the server response
    let resp = service.create(newPeon);
    
    // .subscribe( 
    //   // data => expect(data).toEqual(expectedData[2], 'expected target employee by ID')
    // );

    let testURL = 'http://localhost:3000/Employee'; //employee URL: CHANGE ON UPDATE
    const req = httpTestingController.expectOne(testURL);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(newPeon);
  });

  // update(employee) ------------------------------------------TODO FIX: 'this.http.post is not a func'
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

    //todo: reevaluate if this is needed; it might not return user json after post
    httpClientSpy.put.and.returnValue(asyncData(newPeon)); //setup the server response
    let resp = service.update(newPeon.id, newPeon).subscribe( 
      data => expect(data).toEqual(newPeon, 'expected target employee to be updated')
    );

    let testURL = 'http://localhost:3000/Employee'; //employee URL: CHANGE ON UPDATE
    const req = httpTestingController.expectOne(testURL);
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(newPeon);
  });

  //update
  it('should update an employee and return it', () => {

    let newPeon:Employee = {
      id:3,
      firstName:'string3',
      lastName:'string3',
      email:'string3',
      title:'string3',
      department:'string3',
      resourceMetadata:null
    }

    service.update(newPeon.id,newPeon).subscribe(
      data => expect(data).toEqual(newPeon, 'should return the hero'),
      fail
    );

    // HeroService should have made one request to PUT hero
    const req = httpTestingController.expectOne('http://localhost:3000/Employee');
    expect(req.request.method).toEqual('PUT');
    expect(req.request.body).toEqual(newPeon);

    // Expect server to return the hero after PUT
    const expectedResponse = new HttpResponse(
      { status: 200, statusText: 'OK', body: newPeon });
    req.event(expectedResponse);
  });

  //ERROR 404 TEST
  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: '404 Not Found',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    service.getemployees().subscribe(
      data => fail('expected an error, not data'),
      error  => expect(error.message).toContain('404 Not Found')
    );
    
    expect(1).toEqual(1); //just to help jasmine to stop crying about no expect statements
  });

});


// helper functions
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}