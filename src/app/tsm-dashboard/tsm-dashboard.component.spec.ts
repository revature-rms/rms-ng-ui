import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsmDashboardComponent } from './tsm-dashboard.component';

describe('TsmDashboardComponent', () => {
  let component: TsmDashboardComponent;
  let fixture: ComponentFixture<TsmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsmDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TsmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
