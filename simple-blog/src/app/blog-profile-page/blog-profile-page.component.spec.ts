import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogProfilePageComponent } from './blog-profile-page.component';

describe('BlogProfilePageComponent', () => {
  let component: BlogProfilePageComponent;
  let fixture: ComponentFixture<BlogProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
