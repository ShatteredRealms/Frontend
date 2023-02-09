import { TestBed } from '@angular/core/testing';

import { ChatChannelService } from './chat-channel.service';

describe('ChatChannelService', () => {
  let service: ChatChannelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatChannelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
