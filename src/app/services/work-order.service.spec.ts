import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { WorkOrder } from '../dtos/workOrder';
import { RoomDetailsComponent } from '../room-details/room-details.component';

import { WorkOrderService } from './work-order.service';

describe('WorkOrderService', () => {
  let service: WorkOrderService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController; 
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDetailsComponent ],
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
    spyOn(service, 'getWorkOrder').and.returnValue(Promise.resolve(new Array<WorkOrder>()));
    expectAsync(service.getWorkOrder()).toBeResolved();
  });


  //   let spy = spyOn(WorkOrderService, 'getWorkOrders').and.returnValue(Promise.resolve(true));
  //   expect(service.getWorkOrder()).toBe('peanut butter');
    
  // });

});
