import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog'
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';

import { BlogNavbarComponent } from './blog-navbar.component';

describe('BlogNavbarComponent', () => {
  let component: BlogNavbarComponent;
  let fixture: ComponentFixture<BlogNavbarComponent>;
  let compiled =  null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogNavbarComponent ],
      imports: [
        FormsModule,
        MatDialogModule,
        MatMenuModule
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    expect(compiled.querySelector('#nav-title').textContent).toContain('Simple-Blog');
  });

  describe('navbar modals', () => {
    describe('signup', () => {
      let signupButton = null;

      beforeEach(() => {
        signupButton = compiled.querySelector('#signup-btn');
      });

      it('should find the signup button', () => {
        expect(signupButton).toBeDefined();
      });

      it('should open the signup modal', () => {
        const spy = spyOn(component, 'openDialog').and.callThrough();
        signupButton.click();

        expect(spy).toHaveBeenCalledWith('signup');
      });
    });

    describe('login', () => {
      let loginButton = null;

      beforeEach(() => {
        loginButton = compiled.querySelector('#login-btn');
      });

      it('should find the login button', () => {
        expect(loginButton).toBeDefined();
      });

      it('should open the signup modal', () => {
        const spy = spyOn(component, 'openDialog').and.callThrough();
        loginButton.click();

        expect(spy).toHaveBeenCalledWith('login');
      });
    });
  });

});
