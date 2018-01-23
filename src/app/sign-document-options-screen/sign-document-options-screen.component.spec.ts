import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignDocumentOptionsScreenComponent } from './sign-document-options-screen.component';

describe('SignDocumentOptionsScreenComponent', () => {
  let component: SignDocumentOptionsScreenComponent;
  let fixture: ComponentFixture<SignDocumentOptionsScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignDocumentOptionsScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignDocumentOptionsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
