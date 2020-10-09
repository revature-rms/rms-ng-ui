import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RoomDetailsComponent } from './room-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RoomService } from '../services/room.service';
import { of } from 'rxjs';

describe('RoomDetailsComponent', () => {
  let component: RoomDetailsComponent;
  let fixture: ComponentFixture<RoomDetailsComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController; 
  let  roomService: RoomService;
  let content: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDetailsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      providers: [
        {provide: roomService, useValue: {
              getRooms: () => of({
                "room": {
                    "id": 36,
                    "roomNumber": "2304",
                    "maxOccupancy": 30,
                    "currentStatus": {
                        "test":"test"
                    },
                    "batch": {
                        "test":"test"
                    },
                    "workOrders": [              
                        {
                            "test":"test"
                        }
                    ],
                    "resourceMetadata": {
                        "test":"test"
                    }
                }
            })
        }}
      ]      
    })
    .compileComponents();
  });

  beforeEach(async () => {

    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(RoomDetailsComponent);
    component = fixture.componentInstance;

    // Inject the http service and test controller for each test
    
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    roomService = TestBed.inject(RoomService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should display room info', () => {

    component.ngOnInit();

    spyOn(roomService, 'getRooms').and.callThrough();
    console.log(component.rooms);
    

    fixture.detectChanges();
    content = fixture.nativeElement.querySelector("#number");
    expect(roomService.getRooms).toHaveBeenCalled;
    fixture.detectChanges();
    expect(content.textContent).toContain('2304');
  })
});