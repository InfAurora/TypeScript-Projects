import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BlogNavbarComponent } from './blog-navbar/blog-navbar.component';


describe('AppComponent', () => {
  let fixture = null;
  let app = null;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
      ],
      declarations: [
        AppComponent,
        BlogNavbarComponent,
      ],
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
