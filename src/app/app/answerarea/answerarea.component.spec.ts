import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerareaComponent } from './answerarea.component';

describe('AnswerareaComponent', () => {
  let component: AnswerareaComponent;
  let fixture: ComponentFixture<AnswerareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
