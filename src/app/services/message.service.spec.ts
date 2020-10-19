import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add message to array', () => {
    let newMSG = 'test message';
    service.add(newMSG);
    expect(newMSG).toEqual(service.messages[0]);
  });

  it('should be clear message array', () => {
    service.clear();
    expect(service.messages).toBeFalsy();
  });
});
