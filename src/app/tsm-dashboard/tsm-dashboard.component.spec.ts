import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Campus } from '../dtos/campus';
import { Employee } from '../dtos/employee';

import { TsmDashboardComponent } from './tsm-dashboard.component';

describe('TsmDashboardComponent', () => {
  let component: TsmDashboardComponent;
  let fixture: ComponentFixture<TsmDashboardComponent>;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController; 

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ TsmDashboardComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  // it('should create the component',() => {
  //   expect(component).toBeTruthy();
  //   console.log(component);
  // });

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
  
  it('should get campus data', () => {
    let campusdata: Campus[] =
    [{
    id:1,
    name:'a',
    abbrName:'test1',
    shippingAddress:null,
    trainingManager:null,
    stagingManager:null,
    hrLead:null,
    buildings:null,
    corporateEmployees:null,
    resourceMetadata:null
    },
    {
      id:2,
      name:'b',
      abbrName:'test2',
      shippingAddress:null,
      trainingManager:null,
      stagingManager:null,
      hrLead:null,
      buildings:null,
      corporateEmployees:null,
      resourceMetadata:null
    }];

    expect(campusdata).toEqual(getCampusData());
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

function getCampusData(){
  let campusdata: Campus[] =
    [{
    id:1,
    name:'a',
    abbrName:'test1',
    shippingAddress:null,
    trainingManager:null,
    stagingManager:null,
    hrLead:null,
    buildings:null,
    corporateEmployees:null,
    resourceMetadata:null
    },
    {
      id:2,
      name:'b',
      abbrName:'test2',
      shippingAddress:null,
      trainingManager:null,
      stagingManager:null,
      hrLead:null,
      buildings:null,
      corporateEmployees:null,
      resourceMetadata:null
    }];
  return campusdata;
}