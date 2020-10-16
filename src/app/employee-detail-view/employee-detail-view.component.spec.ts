import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EmployeeDetailViewComponent } from './employee-detail-view.component';

describe('EmployeeDetailViewComponent', () => {
  let component: EmployeeDetailViewComponent;
  let fixture: ComponentFixture<EmployeeDetailViewComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ EmployeeDetailViewComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]   
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDetailViewComponent);
    component = fixture.componentInstance;
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
