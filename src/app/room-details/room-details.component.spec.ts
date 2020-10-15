import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RoomDetailsComponent } from './room-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RoomService } from '../services/room.service';
import { defer, of } from 'rxjs';
import data  from  'src/assets/room.json';
import { Room } from '../dtos/room';


describe('RoomDetailsComponent', () => {
  let component: RoomDetailsComponent;
  let fixture: ComponentFixture<RoomDetailsComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let content: HTMLElement;
  let httpClientSpy: { get: jasmine.Spy, put: jasmine.Spy, post: jasmine.Spy, delete: jasmine.Spy };
  let mockRoomService;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ RoomDetailsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]   ,
      providers: [ { provide: RoomService, useValue: mockRoomService } ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(RoomDetailsComponent);
    component = fixture.componentInstance;
    
    // Inject the http service and test controller for each test
    // httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    // httpClient = TestBed.inject(HttpClient);
    // httpTestingController = TestBed.inject(HttpTestingController);
    mockRoomService = jasmine.createSpyObj(['getRooms']);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display room info', () => {
    var expectedData: Room[] =
    [{
      id: 36,
      roomNumber: "2304",
      maxOccupancy: 30,
      currentStatus: {
          id: 2734,
          whiteboardCleaned: true,
          chairsOrdered: true,
          desksCleaned: true,
          submittedDateTime: "2020-02-21T17:10:23+00.00",
          submitter: {
              id: 14,
              firstName: "Steven",
              lastName: "Kelsey",
              email: "steven.kelsey@revature.com",
              title: "Manager of Technology",
              department: "Training",
              resourceMetadata: {
                  resourceCreator: {
                    id: 14,
                    firstName: "Steven",
                    lastName: "Kelsey",
                    email: "steven.kelsey@revature.com",
                    title: "Manager of Technology",
                    department: "Training",
                    resourceMetadata: null
                  },
                  resourceCreationDateTime: "2020-03-03T13:22:31+00.00",
                  lastModifier: {
                    id: 14,
                    firstName: "Steven",
                    lastName: "Kelsey",
                    email: "steven.kelsey@revature.com",
                    title: "Manager of Technology",
                    department: "Training",
                    resourceMetadata: null
                  },
                  lastModifiedDateTime: "2020-03-05T10:21:35+00.00",
                  resourceOwner: {
                    id: 14,
                    firstName: "Steven",
                    lastName: "Kelsey",
                    email: "steven.kelsey@revature.com",
                    title: "Manager of Technology",
                    department: "Training",
                    resourceMetadata: null
                  },
                  currentlyActive: true
                },
              },
          otherNotes: "An associate summoned the dark lords of programmers past. The desk is ruined."
        },
      batch: {
        id: 703,
        name: "191216-java-usf",
        trainer: {
          id: 14,
          firstName: "Steven",
          lastName: "Kelsey",
          email: "steven.kelsey@revature.com",
          title: "Manager of Technology",
          department: "Training",
          resourceMetadata: null
        },
        coTrainer: {
          id: null,
          firstName: null,
          lastName: null,
          email: null,
          title: null,
          department: null,
          resourceMetadata: null
        },
        associates: [
            {
              id: null,
              firstName: null,
              lastName: null,
              email: null,
              title: null,
              department: null,
              resourceMetadata: null
            }
        ],
        startDate: "2019-12-16",
        endDate: "2020-03-20",
        curriculum: "Java Microservices",
        resourceMetadata: {
          resourceCreator: {
            id: 14,
            firstName: "Steven",
            lastName: "Kelsey",
            email: "steven.kelsey@revature.com",
            title: "Manager of Technology",
            department: "Training",
            resourceMetadata: null
          },
          resourceCreationDateTime: "2020-03-03T13:22:31+00.00",
          lastModifier: {
            id: 14,
            firstName: "Steven",
            lastName: "Kelsey",
            email: "steven.kelsey@revature.com",
            title: "Manager of Technology",
            department: "Training",
            resourceMetadata: null
          },
          lastModifiedDateTime: "2020-03-05T10:21:35+00.00",
          resourceOwner: {
            id: 14,
            firstName: "Steven",
            lastName: "Kelsey",
            email: "steven.kelsey@revature.com",
            title: "Manager of Technology",
            department: "Training",
            resourceMetadata: null
          },
          currentlyActive: true
        }
      }
  }]
  
    component.ngOnInit();
    mockRoomService.getRooms.and.returnValue(expectedData);
    fixture.detectChanges();
    console.log(component.rooms);
    

    
    content = fixture.nativeElement.querySelector("#number");
    fixture.detectChanges();
    expect(content.textContent).toContain('2304');
  })
  
});

// helper functions
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

function asyncError<T>(errorObject: any) {
  return defer(() => Promise.reject(errorObject));
}