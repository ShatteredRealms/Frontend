import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatChannelsTableComponent } from './chat-channels-table.component';

describe('ChatChannelsTableComponent', () => {
  let component: ChatChannelsTableComponent;
  let fixture: ComponentFixture<ChatChannelsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatChannelsTableComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatChannelsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
