import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentOptionsScreenComponent } from './upload-document-options-screen.component';

describe('UploadDocumentOptionsScreenComponent', () => {
  let component: UploadDocumentOptionsScreenComponent;
  let fixture: ComponentFixture<UploadDocumentOptionsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadDocumentOptionsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadDocumentOptionsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
