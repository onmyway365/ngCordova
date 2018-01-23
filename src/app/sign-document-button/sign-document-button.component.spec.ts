import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDocumentButtonComponent } from './sign-document-button.component';

describe('SignDocumentButtonComponent', () => {
  let component: SignDocumentButtonComponent;
  let fixture: ComponentFixture<SignDocumentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignDocumentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDocumentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
