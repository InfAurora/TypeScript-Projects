import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogAdminPageComponent } from './blog-admin-page.component';

describe('BlogAdminPageComponent', () => {
  let component: BlogAdminPageComponent;
  let fixture: ComponentFixture<BlogAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogAdminPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
