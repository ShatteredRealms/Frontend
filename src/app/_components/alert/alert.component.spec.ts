import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from 'src/app/_services/alert.service';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let service: AlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    service = TestBed.inject(AlertService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render if there are no messages', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toEqual('');
  });

  // it('should render if there is a success message', () => {
  //   const message = 'success message';
  //   service.success(message);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement;
  //   expect(compiled.query(By.css('alert')).nativeElement?.textContent).toEqual(message);
  // });

  // it('should render if there is an error message', () => {
  //   const message = 'error message';
  //   service.success(message);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement;
  //   expect(compiled.query(By.css('alert')).nativeElement?.textContent).toEqual(message);
  // });
});
