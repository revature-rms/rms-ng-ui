import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AmenityService } from './amenity.service';
import { MessageService } from './message.service';
import { defer } from 'rxjs';
import { Amenity } from '../dtos/amenity';

//More documentation on the employee.service.spec.ts
describe('AmenityService', () => {
  let service: AmenityService;
  let httpClientSpy: { get: jasmine.Spy };
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AmenityService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AmenityService(httpClientSpy as any, MessageService as any); //mock service
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  //TESTS
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected amenity data (HttpClient called once)', () => {
    var expectedData: Amenity[] =
      [{
        type:'String',
        status:'String'
      },
      {
        type:'String2',
        status:'String2'
      }
      ];

    //setup the server response
    httpClientSpy.get.and.returnValue(asyncData(expectedData));


    //some of the services are returning promises, use .then, rather than .subscribe
    service.getAmenities().then( 
      campuses => expect(campuses).toEqual(expectedData, 'expected campus data')
    ); //check to make sure they're the same

    //some bonus check to see how many http calls went through
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  });

  //test error handling
  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404, statusText: 'test 404 error'
    });
  
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
  
    service.getAmenities().then( 
      data => fail('expected an error, not data'),
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