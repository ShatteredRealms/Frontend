import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import {BrowserTestingModule} from "@angular/platform-browser/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {AlertService} from "../../_services/alert.service";
import {AuthenticationService} from "../../_services/authentication.service";
import {UsersService} from "../../_services/users.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/user.model";
import {NewUser} from "../../_helpers/dummy.data";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {Observable, of, throwError} from 'rxjs';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let alertService: AlertService;
  let authService: AuthenticationService;
  let userService: UsersService;
  let router: Router;
  let user: User;
  let route: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    alertService = TestBed.inject(AlertService);
    authService = TestBed.inject(AuthenticationService);
    userService = TestBed.inject(UsersService);
    router = TestBed.inject(Router);
    route = TestBed.inject(ActivatedRoute);
    user = NewUser();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit()', () => {
    let getUserSpy: jasmine.Spy<(id: number) => Observable<any>>;
    beforeEach(() => {
      spyOn(route.snapshot.paramMap, 'get').and.returnValue(user.username.toString());
      getUserSpy = spyOn(userService, 'getUser');
    });

    it('should user the current user object if requesting self', () => {
      spyOnProperty(authService, 'currentUserValue', 'get').and.returnValue(user);
      component.ngOnInit();
      expect(userService.getUser).not.toHaveBeenCalled();
    });

    // it('should look up the user if needed', () => {
    //   getUserSpy.and.returnValue(of(1));
    //   component.ngOnInit();
    //   expect(getUserSpy).toHaveBeenCalledTimes(1);
    // });
    //
    // it('should look up the user if needed and reroute on 404 error', () => {
    //   getUserSpy.and.returnValue(throwError({status: 404}));
    //   spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    //   component.ngOnInit();
    //   expect(getUserSpy).toHaveBeenCalledTimes(1);
    // });
    //
    // it('should look up the user if needed and reroute on unknown errors', () => {
    //   getUserSpy.and.returnValue(throwError({status: 500}));
    //   spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    //   component.ngOnInit();
    //   expect(getUserSpy).toHaveBeenCalledTimes(1);
    // });
  });
});
