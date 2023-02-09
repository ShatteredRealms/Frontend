import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChatChannelComponent } from './new-chat-channel.component';

describe('NewChatChannelComponent', () => {
  let component: NewChatChannelComponent;
  let fixture: ComponentFixture<NewChatChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewChatChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewChatChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
