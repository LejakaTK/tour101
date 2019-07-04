import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayerPage } from './displayer.page';

describe('DisplayerPage', () => {
  let component: DisplayerPage;
  let fixture: ComponentFixture<DisplayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
