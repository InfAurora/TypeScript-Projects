import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewOfPostComponent } from './preview-of-post.component';

describe('PreviewOfPostComponent', () => {
  let component: PreviewOfPostComponent;
  let fixture: ComponentFixture<PreviewOfPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviewOfPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewOfPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
