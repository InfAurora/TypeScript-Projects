import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogHomePageComponent } from './blog-home-page.component';

describe('BlogHomePageComponent', () => {
  let component: BlogHomePageComponent;
  let fixture: ComponentFixture<BlogHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
