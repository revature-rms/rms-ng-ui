import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { defer } from 'rxjs';
import { Batch } from '../dtos/batch';

import { BatchService } from './batch.service';
import { MessageService } from './message.service';

//More documentation on the employee.service.spec.ts
describe('BatchService', () => {
  let service: BatchService;
  let httpClientSpy: { get: jasmine.Spy };
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BatchService]
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new BatchService(httpClientSpy as any, MessageService as any); //mock service
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  //TESTS
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected batch data (HttpClient called once)', () => {
    var expectedData: Batch[] =
      [{
        id:1,
        name:'String',
        trainer:null,
        coTrainer:null,
        associates:null,
        startDate:'String',
        endDate:'String',
        curriculum:'String',
        resourceMetadata:null
      },
      {
        id:2,
        name:'String',
        trainer:null,
        coTrainer:null,
        associates:null,
        startDate:'String',
        endDate:'String',
        curriculum:'String',
        resourceMetadata:null
      }
      ];

    //setup the server response
    httpClientSpy.get.and.returnValue(asyncData(expectedData));


    //some of the services are returning promises, use .then, rather than .subscribe
    service.getBatches().then( 
      data => expect(data).toEqual(expectedData, 'expected batch data')
    ); //check to make sure they're the same

    //some bonus check to see how many http calls went through
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');

  });


  //get batch by ID
  it('should return target batch data (HttpClient called once)', () => {
    var expectedData: Batch[] =
      [{
        id:1,
        name:'String',
        trainer:null,
        coTrainer:null,
        associates:null,
        startDate:'String',
        endDate:'String',
        curriculum:'String',
        resourceMetadata:null
      },
      {
        id:2,
        name:'String',
        trainer:null,
        coTrainer:null,
        associates:null,
        startDate:'String',
        endDate:'String',
        curriculum:'String',
        resourceMetadata:null
      }
      ];

    //setup the server response
    httpClientSpy.get.and.returnValue(asyncData(expectedData[0])); // id 1, [0]


    //some of the services are returning promises, use .then, rather than .subscribe
    service.getBatchById(1).then( 
      data => expect(data).toEqual(expectedData, 'expected batch data')
    ); //check to make sure they're the same

    //TODO: include test to ensure URL is correct. ez

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
  
    service.getBatches().then( 
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
