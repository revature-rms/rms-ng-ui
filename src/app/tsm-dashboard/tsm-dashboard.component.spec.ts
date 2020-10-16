import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TsmDashboardComponent } from './tsm-dashboard.component';

describe('TsmDashboardComponent', () => {
  let component: TsmDashboardComponent;
  let fixture: ComponentFixture<TsmDashboardComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsmDashboardComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  it('should create the component',() => {
    expect(component).toBeTruthy();
    console.log(component);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsmDashboardComponent);
    component = fixture.componentInstance;

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
