import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { SignupDialogComponent } from './signup-dialog.component';

describe('SignupDialogComponent', () => {
  let component: SignupDialogComponent;
  let fixture: ComponentFixture<SignupDialogComponent>;
  let compiled = null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupDialogComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find submitLogin button', () => {
    const signupButton = compiled.querySelector('#sign-up-form-btn');
    expect(signupButton).toBeDefined();
  });
});
