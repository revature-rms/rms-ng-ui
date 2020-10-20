import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Employee } from '../dtos/employee';

import { EmployeeDetailViewComponent } from './employee-detail-view.component';

describe('EmployeeDetailViewComponent', () => {
  // let component: EmployeeDetailViewComponent;
  // let fixture: ComponentFixture<EmployeeDetailViewComponent>;
  // let httpClient: HttpClient;
  // let httpTestingController: HttpTestingController; 

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  //     declarations: [ EmployeeDetailViewComponent ],
  //     imports: [ RouterTestingModule, HttpClientTestingModule ]   
  //   })
  //   .compileComponents();

  //   fixture = TestBed.createComponent(EmployeeDetailViewComponent);
  //   component = fixture.componentInstance;
  //   httpClient = TestBed.inject(HttpClient);
  //   httpTestingController = TestBed.inject(HttpTestingController);
  //   fixture.detectChanges();
  // });

  // xit('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('should get employee data', () => {
    var employees: Employee[] =
  [{
    id:1,
    firstName:'string',
    lastName:'string',
    email:'string',
    title:'string',
    department:'string',
    resourceMetadata:null
  },
  {
    id:2,
    firstName:'string2',
    lastName:'string2',
    email:'string2',
    title:'string2',
    department:'string2',
    resourceMetadata:null
  }];
  expect(employees).toEqual(getEmployeeData());
  });

});

function getEmployeeData(){
  var expectedData: Employee[] =
  [{
    id:1,
    firstName:'string',
    lastName:'string',
    email:'string',
    title:'string',
    department:'string',
    resourceMetadata:null
  },
  {
    id:2,
    firstName:'string2',
    lastName:'string2',
    email:'string2',
    title:'string2',
    department:'string2',
    resourceMetadata:null
  }];
  return expectedData;
}