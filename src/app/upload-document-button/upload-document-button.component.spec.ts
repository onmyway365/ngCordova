import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentButonComponent } from './upload-document-button.component';

describe('UploadDocumentButonComponent', () => {
  let component: UploadDocumentButonComponent;
  let fixture: ComponentFixture<UploadDocumentButonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDocumentButonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDocumentButonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
