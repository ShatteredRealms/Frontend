import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from './alert.service';
import {NavigationEnd, NavigationStart, Router} from "@angular/router";
import {Subject} from "rxjs";

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
            RouterTestingModule
          ],
    });
    service = TestBed.inject(AlertService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should allow success messages', () => {
      let count = 0;
      const message = 'test success';
      expect(service.getAlert().subscribe((alert) => {
          expect(alert.text).toEqual(message);
          expect(alert.cssClass).toContain('alert');
          expect(alert.cssClass).toContain('alert-success');
          count++;
      }));
      service.success(message);
    expect(service['keepAfterRouteChange']).toBeFalsy();

      expect(count).toEqual(1);
  });

  it('should allow error messages', () => {
    let count = 0;
    const message = 'test error';
    expect(service.getAlert().subscribe((alert) => {
        expect(alert.text).toEqual(message);
        expect(alert.cssClass).toContain('alert');
        expect(alert.cssClass).toContain('alert-danger');
        count++;
    }));
    service.error(message);
    expect(service['keepAfterRouteChange']).toBeFalsy();

    expect(count).toEqual(1);
  });

  it('should allow info messages', () => {
    let count = 0;
    const message = 'test info';
    expect(service.getAlert().subscribe((alert) => {
      expect(alert.text).toEqual(message);
      expect(alert.cssClass).toContain('alert');
      expect(alert.cssClass).toContain('alert-info');
      count++;
    }));
    service.info(message);
    expect(service['keepAfterRouteChange']).toBeFalsy();

    expect(count).toEqual(1);
  });

  it('should allow clearing of alerts', () => {
    let count = 0;
    let expectedMessage = 'message';
    expect(service.getAlert().subscribe((alert) => {
      count++;
      if (count == 1) {
        expect(alert.text).toEqual(expectedMessage);
      } else {
        expect(alert).toEqual({});
      }
    }));
    service.info(expectedMessage);
    expect(count).toEqual(1);
    expect(service['keepAfterRouteChange']).toBeFalsy();
    service.clear();
    expect(count).toEqual(2);
  });

  it('should update after route change', () => {
    let count = 0;
    let expectedMessage = 'message';
    const router = TestBed.inject(Router);

    expect(service.getAlert().subscribe((alert) => {
      count++;
      if (count == 1) {
        expect(alert.text).toEqual(expectedMessage);
      } else {
        expect(alert).toEqual({});
      }
    }));

    service.info(expectedMessage, true);
    expect(service['keepAfterRouteChange']).toBeTruthy();
    expect(count).toEqual(1);

    (router.events as unknown as Subject<NavigationEnd>).next(new NavigationEnd(1, '/', '/'));
    expect(service['keepAfterRouteChange']).toBeTruthy();
    expect(count).toEqual(1);

    (router.events as unknown as Subject<NavigationStart>).next(new NavigationStart(1, '/'));
    expect(service['keepAfterRouteChange']).toBeFalsy();
    expect(count).toEqual(1);

    (router.events as unknown as Subject<NavigationStart>).next(new NavigationStart(2, '/'));
    expect(count).toEqual(2);
  });
});
