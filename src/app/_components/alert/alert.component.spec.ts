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

  describe('rendering message', () => {
    const alerts = [
      {
        message: 'success message',
        func: () => service.success('success message'),
        css: '.alert-success'
      },
      {
        message: 'error message',
        func: () => service.error('error message'),
        css: '.alert-danger'
      },
      {
        message: 'info message',
        func: () => service.info('info message'),
        css: '.alert-info'
      }
    ];

    for(const alert of alerts) {
      it(`should render if there is a ${alert.message}`, () => {
        alert.func();
        fixture.detectChanges();
        const compiled = fixture.debugElement;
        expect(compiled.query(By.css('.alert')).nativeElement?.textContent).toContain(alert.message);
        expect(compiled.query(By.css(alert.css)).nativeElement?.textContent).toContain(alert.message);
      });
    }
  });
});
