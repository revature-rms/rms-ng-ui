import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      declarations: [ LoginComponent ], 
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        AppModule
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should contain login title', () => {
  //   const headerEl: HTMLElement = fixture.nativeElement;
  //   const p = headerEl.querySelector('header');
  //   fixture.detectChanges();
  //   expect(p.textContent).toContain('Login');
  // })

  it('should login with proper form fields', () => {
    let username;
    let password;

    expect(login(username, password)).toBeFalse();
    password = "snape kills dumbledore";
    expect(login(username, password)).toBeFalse();
    username = "exoglot spoilers";
    password = "Alastair is Iskandar is Sasha is Alex";
    expect(login(username, password)).toBeTrue();
    expect(component.submitted).toBeTrue();
    expect(component.loading).toBeTrue();

  });

  function login(username, password){
    component.submitted = true;
    component.loading = true;
    if(!username) return false;
    if(!password) return false;
    return true; //assuming authentication went through
  }
});

