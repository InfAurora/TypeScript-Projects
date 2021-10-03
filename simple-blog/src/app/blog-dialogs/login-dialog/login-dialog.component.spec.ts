import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from '../../app.component';
import { BlogNavbarComponent } from '../../blog-navbar/blog-navbar.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar';

import { LoginDialogComponent } from './login-dialog.component';

describe('LoginDialogComponent', () => {
  let component: LoginDialogComponent;
  let fixture: ComponentFixture<LoginDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,
        BlogNavbarComponent,
        LoginDialogComponent
      ],
      imports: [
        MatDialogModule,
        MatToolbarModule,
        RouterTestingModule
        
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should find submitLogin button', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const loginButton = compiled.querySelector('#login-form-btn');
    expect(loginButton).toBeTruthy;
  });
});
