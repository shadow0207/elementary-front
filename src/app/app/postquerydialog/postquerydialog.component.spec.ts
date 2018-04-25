import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostquerydialogComponent } from './postquerydialog.component';

describe('PostquerydialogComponent', () => {
  let component: PostquerydialogComponent;
  let fixture: ComponentFixture<PostquerydialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostquerydialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostquerydialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
