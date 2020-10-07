import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppModule } from '../app.module';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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

  it('should contain login title', () => {
    const headerEl: HTMLElement = fixture.nativeElement;
    const p = headerEl.querySelector('header');
    fixture.detectChanges();
    expect(p.textContent).toContain('Login');
  })

  
});
