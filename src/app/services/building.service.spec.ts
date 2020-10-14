import { HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { BuildingService } from './building.service';

describe('BuildingService', () => {
  let service: BuildingService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController; 
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ RouterTestingModule, HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuildingService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
