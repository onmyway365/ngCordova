import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeImageFeatureComponent } from './take-image-feature.component';

describe('TakeImageFeatureComponent', () => {
  let component: TakeImageFeatureComponent;
  let fixture: ComponentFixture<TakeImageFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeImageFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeImageFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
