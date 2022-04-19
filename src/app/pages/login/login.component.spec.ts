import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.loginForm).toBeTruthy();
  });

  describe('login', () => {
    let validUser: any;

    beforeEach(() => {
      validUser = {
        email: 'email@email.com',
        password: 'password',
      };
    })

    it('should work with valid credentials', () => {
      component.loginForm.setValue(validUser);
      expect(component.onLogin()).toBeTruthy();
    });

    it('should validate the email', () => {
      component.loginForm.setValue(validUser);
      expect(component.onLogin()).toBeTruthy();
      validUser.email = "asdf";
      component.loginForm.setValue(validUser);
      expect(component.onLogin()).toBeFalsy();
    });

    it('should validate the password', () => {
      component.loginForm.setValue(validUser);
      expect(component.onLogin()).toBeTruthy();
      validUser.password = "";
      component.loginForm.setValue(validUser);
      expect(component.onLogin()).toBeFalsy();
    });
  });
});
