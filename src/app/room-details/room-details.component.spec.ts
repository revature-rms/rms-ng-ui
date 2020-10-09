import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RoomDetailsComponent } from './room-details.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('RoomDetailsComponent', () => {
  let component: RoomDetailsComponent;
  let fixture: ComponentFixture<RoomDetailsComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomDetailsComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});