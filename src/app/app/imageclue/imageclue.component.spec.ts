import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageclueComponent } from './imageclue.component';

describe('ImageclueComponent', () => {
  let component: ImageclueComponent;
  let fixture: ComponentFixture<ImageclueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageclueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageclueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
