import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchDetailViewComponent } from './batch-detail-view.component';

describe('BatchDetailViewComponent', () => {
  let component: BatchDetailViewComponent;
  let fixture: ComponentFixture<BatchDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatchDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
