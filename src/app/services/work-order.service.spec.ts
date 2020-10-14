import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkOrder } from '../dtos/workOrder';

import { WorkOrderService } from './work-order.service';

describe('WorkOrderService', () => {
  let service: WorkOrderService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController; 
  let workOrderExpected: any = {
      "id": 234,
      "createdDateTime": "2020-02-07T12:23:35+00.00",
      "resolvedDateTime": "2020-02-15T16:30:22+00.00",
      "category": "Lighting",
      "description": "One of the overhead lights is out and creating an irritating buzzing noise.",
      "contactEmail": "somewhere@usf.com",
      "creator": {
        "id": 14,
        "firstName": "Steven",
        "lastName": "Kelsey",
        "email": "steven.kelsey@revature.com",
        "title": "Manager of Technology",
        "department": "Training"
      },
      "resolver": {
        "id": 14,
        "firstName": "Steven",
        "lastName": "Kelsey",
        "email": "steven.kelsey@revature.com",
        "title": "Manager of Technology",
        "department": "Training"
      }
  }


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkOrderService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get work orders', (done) => {
    let workOrderArray: WorkOrder[] = [];
    workOrderArray.push(workOrderExpected);
    spyOn(service, 'getWorkOrders').and.returnValue(Promise.resolve(workOrderArray));
    // expectAsync(service.getWorkOrders()).toBeResolved();
    var result = service.getWorkOrders().then(res => res.data);
    expect(result).toEqual(workOrderExpected);
    done();
  });


  //   let spy = spyOn(WorkOrderService, 'getWorkOrders').and.returnValue(Promise.resolve(true));
  //   expect(service.getWorkOrder()).toBe('peanut butter');
    
  // });

});
