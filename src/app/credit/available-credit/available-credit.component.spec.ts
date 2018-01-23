import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableCreditComponent } from './available-credit.component';

describe('AvailableCreditComponent', () => {
  let component: AvailableCreditComponent;
  let fixture: ComponentFixture<AvailableCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
