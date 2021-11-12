import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from '../../app.component';
import { BlogNavbarComponent } from '../../blog-navbar/blog-navbar.component';
import { LoginDialogComponent } from './login-dialog.component';

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;
  let compiled = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BlogNavbarComponent,
        LoginDialogComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find submitLogin button', () => {
    const loginButton = compiled.querySelector('#login-form-btn');
    expect(loginButton).toBeDefined();
  });
});
