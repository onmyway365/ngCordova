import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingDocumentLoadButtonComponent } from './existing-document-load-button.component';

describe('ExistingDocumentLoadButtonComponent', () => {
  let component: ExistingDocumentLoadButtonComponent;
  let fixture: ComponentFixture<ExistingDocumentLoadButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingDocumentLoadButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingDocumentLoadButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
