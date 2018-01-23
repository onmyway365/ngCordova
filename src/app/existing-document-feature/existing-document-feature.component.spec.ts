import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExistingDocumentFeatureComponent } from './existing-document-feature.component';

describe('ExistingDocumentFeatureComponent', () => {
  let component: ExistingDocumentFeatureComponent;
  let fixture: ComponentFixture<ExistingDocumentFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingDocumentFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExistingDocumentFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
