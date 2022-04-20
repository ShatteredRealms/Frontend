import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AlertService } from 'src/app/_services/alert.service';

import { AlertComponent } from './alert.component';
import clock = jasmine.clock;
import {NavigationEnd, NavigationStart, Router, RouterEvent} from "@angular/router";
import {of, ReplaySubject} from "rxjs";
import {Alert} from "../../models/alert.model";

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;
  let service: AlertService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertComponent],
      imports: [RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    service = TestBed.inject(AlertService);
    router = TestBed.inject(Router);
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
        message: 'error message',
        func: () => service.warn('error message'),
        css: '.alert-warning'
      },
      {
        message: 'info message',
        func: () => service.info('info message'),
        css: '.alert-info'
      }
    ];

    for(const alert of alerts) {
      let count = 0;
      it(`should render if there is a ${alert.message} and keep others`, () => {
        alert.func();
        count++;
        expect(component.alerts.find((a) => a.message === alert.message)).toBeTruthy();
        expect(component.alerts.length).toEqual(count);
        // This is more of an integration test not a unit test
        // fixture.detectChanges();
        // const compiled = fixture.debugElement;
        // expect(compiled.query(By.css('.alert')).nativeElement?.textContent).toContain(alert.message);
        // expect(compiled.query(By.css(alert.css)).nativeElement?.textContent).toContain(alert.message);
      });
    }
  });

  it('should clear alerts when an empty alert is received', () => {
    service.success('messasge');
    expect(component.alerts.length).toEqual(1);
    service.clear();
    expect(component.alerts.length).toEqual(0);


    service.success('messasge');
    service.success('messasge');
    service.success('messasge');
    expect(component.alerts.length).toEqual(3);
    service.clear();
    expect(component.alerts.length).toEqual(0);
  });


  it('should keep alerts marked to be kept', () => {
    service.success('messasge');
    expect(component.alerts.length).toEqual(1);
    service.clear();
    expect(component.alerts.length).toEqual(0);


    service.success('messasge');
    service.success('messasge', {keepAfterRouteChange: true});
    service.success('messasge', {keepAfterRouteChange: true});
    expect(component.alerts.length).toEqual(3);
    service.clear();
    expect(component.alerts.length).toEqual(2);
  });

  it('should allow auto closing of alerts', async () => {
    clock().install();
    const spy = spyOn(component, 'removeAlert');
    service.success('message', {autoClose: true});
    clock().tick(3100);
    expect(spy).toHaveBeenCalledTimes(1);
    clock().uninstall();
  });

  it('should clear on Router NavigationStart events', () => {
    spyOn(service, 'clear');
    router.navigate(['/']);
    expect(service.clear).toHaveBeenCalledTimes(1);
  });

  it('should allow removing alerts', () => {
    let alert = new Alert({id: 'default-id', fade: false, message: 'message'});
    expect(() => component.removeAlert(alert)).not.toThrow();

    component.alerts.push(alert);
    component.removeAlert(alert);
    waitForAsync(() => { expect(component.alerts.find((a) => a === alert)).toBeFalsy() });
  });

  it('should add cssClasses', () => {
    let alert = new Alert();
    expect(component.cssClass(alert)).toContain('alert');
    expect(component.cssClass(alert)).toContain('alert-dismissable');
    expect(component.cssClass(alert)).toContain('alert-info');
    expect(component.cssClass(alert)).not.toContain('fade');

    alert.fade = true;
    expect(component.cssClass(alert)).toContain('fade');
  });
});
