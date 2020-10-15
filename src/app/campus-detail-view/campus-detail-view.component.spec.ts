import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusDetailViewComponent } from './campus-detail-view.component';

describe('CampusDetailViewComponent', () => {
  let component: CampusDetailViewComponent;
  let fixture: ComponentFixture<CampusDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampusDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
