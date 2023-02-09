import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChatChannelComponent } from './view-chat-channel.component';

describe('ViewChatChannelComponent', () => {
  let component: ViewChatChannelComponent;
  let fixture: ComponentFixture<ViewChatChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewChatChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChatChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
