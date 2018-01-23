import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeImageButtonComponent } from './take-image-button.component';

describe('TakeImageButtonComponent', () => {
  let component: TakeImageButtonComponent;
  let fixture: ComponentFixture<TakeImageButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeImageButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeImageButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
