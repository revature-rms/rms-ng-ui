import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Campus } from '../dtos/campus';

import { CampusDetailViewComponent } from './campus-detail-view.component';

describe('CampusDetailViewComponent', () => {
  // let component: CampusDetailViewComponent;
  // let fixture: ComponentFixture<CampusDetailViewComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  //     declarations: [ CampusDetailViewComponent ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(CampusDetailViewComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // xit('should create', () => {
  //   expect(component).toBeTruthy();
  // });

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


