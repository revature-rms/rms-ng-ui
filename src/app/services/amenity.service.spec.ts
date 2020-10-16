import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AmenityService } from './amenity.service';

describe('AmenityService', () => {
  let service: AmenityService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController; 


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmenityService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
