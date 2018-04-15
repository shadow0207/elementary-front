import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorydialogcompComponent } from './historydialogcomp.component';

describe('HistorydialogcompComponent', () => {
  let component: HistorydialogcompComponent;
  let fixture: ComponentFixture<HistorydialogcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorydialogcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorydialogcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
