import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('AuthService', () => {
  let service: AuthService;                                           //needed?

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });
    let httpClientSpy: { get: jasmine.Spy };                          //init spy
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AuthService(httpClientSpy as any);                  //mock service
  });


  //TESTS
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //current auth service incomplete


});
