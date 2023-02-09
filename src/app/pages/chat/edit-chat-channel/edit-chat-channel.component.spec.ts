import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditChatChannelComponent } from './edit-chat-channel.component';

describe('EditChatChannelComponent', () => {
  let component: EditChatChannelComponent;
  let fixture: ComponentFixture<EditChatChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditChatChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditChatChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
