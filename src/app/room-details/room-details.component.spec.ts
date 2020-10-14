import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RoomDetailsComponent } from './room-details.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RoomService } from '../services/room.service';
import { of } from 'rxjs';
import data  from  'src/assets/room.json';


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
      imports: [ RouterTestingModule, HttpClientTestingModule ]   
    })
    .compileComponents();
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

    // spyOn(roomService, 'getRooms').and.returnValue(Promise.resolve(data));
    console.log(component.rooms);
    

    fixture.detectChanges();
    content = fixture.nativeElement.querySelector("#number");
    expect(roomService.getRooms).toHaveBeenCalled;
    fixture.detectChanges();
    expect(content.textContent).toContain('2304');
  })
  
});