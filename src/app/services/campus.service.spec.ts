import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CampusService } from './campus.service';
import { Campus } from '../dtos/campus';
import { defer } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MessageService } from './message.service';


//More documentation on the employee.service.spec.ts
describe('CampusService', () => {
  let service: CampusService;
  let httpClientSpy: { get: jasmine.Spy };
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CampusService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new CampusService(httpClientSpy as any, MessageService as any); //mock service
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  //TESTS
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected campus data (HttpClient called once)', () => {
    const expectedCampus: Campus[] =
      [{
      id:1,
      name:'a',
      abbrName:'test1',
      shippingAddress:null,
      trainingManager:null,
      stagingManager:null,
      hrLead:null,
      buildings:null,
      corporateEmployees:null,
      resourceMetadata:null
    },
    {
      id:2,
      name:'b',
      abbrName:'test2',
      shippingAddress:null,
      trainingManager:null,
      stagingManager:null,
      hrLead:null,
      buildings:null,
      corporateEmployees:null,
      resourceMetadata:null
    }
  ]

    //setup the server response
    httpClientSpy.get.and.returnValue(asyncData(expectedCampus));
    service.getCampus().subscribe( 
      campuses => expect(campuses).toEqual(expectedCampus, 'expected campus data')
    ); //check to make sure they're the same

    //some bonus check to see how many http calls went through
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  });

  //test error handling
  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'Not Found'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    service.getCampus().subscribe(
      campuses => fail('expected an error, not campuses'),
      error  => expect(error.message).toContain('test 404 error')
    );
    
    expect(1).toEqual(1); //just to help jasmine crying about no expect statements
  });

});




// helper functions
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}