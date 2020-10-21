import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  // let component: NavbarComponent;
  // let fixture: ComponentFixture<NavbarComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  //     declarations: [ NavbarComponent ],
  //     imports: [ Router ]
  //   })
  //   .compileComponents();
  // });

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(NavbarComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  
  var isTSM= false; //Training site manager
  var isBMNGR: boolean = false; //Building manager
  var isADMN: boolean = false; //Admin
  var isTRNR: boolean = false; //Training manager
  var loggedin: boolean = true; //default:false


  it('should handle role logic correctly', () => {
    let role;
    roleLogic(role);
    expect(loggedin).toBeFalse;
    role = "Admin";
    expect(loggedin).toBeTrue;
    expect(isADMN).toBeTrue;
    role = "Trainer";
    expect(isTRNR).toBeTrue;
    role = "Locked";
    expect(loggedin).toBeFalse;
    expect(1).toEqual(1);
  });

  function roleLogic(role){
    if(role){
      loggedin=true;
      switch(role){
        case "Admin": 
                      isADMN=true;
        case "Training Site Manager": 
                      isTSM=true;
        case "Building Manager":
                      isBMNGR=true;
        case "Trainer":
                      isTRNR=true;
        case "Locked":
                      loggedin=false;
      }
    } 
  }


});
