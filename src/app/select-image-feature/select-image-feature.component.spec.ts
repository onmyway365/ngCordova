import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectImageFeatureComponent } from './select-image-feature.component';

describe('SelectImageFeatureComponent', () => {
  let component: SelectImageFeatureComponent;
  let fixture: ComponentFixture<SelectImageFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectImageFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectImageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
