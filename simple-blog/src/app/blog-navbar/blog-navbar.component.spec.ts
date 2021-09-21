import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatToolbarModule } from '@angular/material/toolbar';

import { BlogNavbarComponent } from './blog-navbar.component';

describe('BlogNavbarComponent', () => {
  let component: BlogNavbarComponent;
  let fixture: ComponentFixture<BlogNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogNavbarComponent ],
      imports: [
        MatToolbarModule,
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#nav-title').textContent).toContain('Simple-Blog');
  });
});
