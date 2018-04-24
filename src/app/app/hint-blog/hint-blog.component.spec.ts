import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HintBlogComponent } from './hint-blog.component';

describe('HintBlogComponent', () => {
  let component: HintBlogComponent;
  let fixture: ComponentFixture<HintBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HintBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HintBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
