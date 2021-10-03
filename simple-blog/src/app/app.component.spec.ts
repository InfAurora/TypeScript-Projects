import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BlogNavbarComponent } from './blog-navbar/blog-navbar.component';
import { MatDialogModule } from '@angular/material/dialog'
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterTestingModule } from '@angular/router/testing';



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
        MatDialogModule,
        MatToolbarModule,
        RouterTestingModule
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
