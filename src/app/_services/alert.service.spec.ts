import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from './alert.service';

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
      service.success(message, false);

      expect(count).toEqual(1);
  })

  it('should allow error messages', () => {
    let count = 0;
    const message = 'test error';
    expect(service.getAlert().subscribe((alert) => {
        expect(alert.text).toEqual(message);
        expect(alert.cssClass).toContain('alert');
        expect(alert.cssClass).toContain('alert-danger');
        count++;
    }));
    service.error(message, false);

    expect(count).toEqual(1);
  })

  it('should allow info messages', () => {
    let count = 0;
    const message = 'test info';
    expect(service.getAlert().subscribe((alert) => {
      expect(alert.text).toEqual(message);
      expect(alert.cssClass).toContain('alert');
      expect(alert.cssClass).toContain('alert-info');
      count++;
    }));
    service.error(message, false);

    expect(count).toEqual(1);
  })
});
