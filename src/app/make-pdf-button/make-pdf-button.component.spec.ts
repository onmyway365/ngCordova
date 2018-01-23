import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakePdfButtonComponent } from './make-pdf-button.component';

describe('MakePdfButtonComponent', () => {
  let component: MakePdfButtonComponent;
  let fixture: ComponentFixture<MakePdfButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakePdfButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakePdfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
