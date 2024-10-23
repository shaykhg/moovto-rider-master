import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePopupPage } from './image-popup.page';

describe('ImagePopupPage', () => {
  let component: ImagePopupPage;
  let fixture: ComponentFixture<ImagePopupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagePopupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagePopupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
