import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { BlogNavbarComponent } from './blog-navbar/blog-navbar.component';

import { MatDialogModule } from '@angular/material/dialog'
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let fixture = null;
  let app = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BlogNavbarComponent,
      ],
      imports: [
        FormsModule,
        MatDialogModule
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'simple-blog'`, () => {
    expect(app.title).toEqual('simple-blog');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const navBar = compiled.querySelector('app-blog-navbar');
    expect(navBar).toBeTruthy();
  });
});
