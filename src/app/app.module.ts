import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ManageCreditService } from './services/manage-credit.service';
import { MessageService } from './services/message.service';
import { HomeComponent } from './home/home.component';
import { AvailableCreditComponent } from './credit/available-credit/available-credit.component';
import { BuyCreditComponent } from './credit/buy-credit/buy-credit.component';
import { SignDocumentButtonComponent } from './sign-document-button/sign-document-button.component';
import { UploadDocumentButonComponent } from './upload-document-button/upload-document-button.component';
import { FooterComponent } from './footer/footer.component';
import { TakeImageButtonComponent } from './take-image-button/take-image-button.component';
import { MakePdfButtonComponent } from './make-pdf-button/make-pdf-button.component';
import { SelectDocumentComponent } from './select-document/select-document.component';
import { SignDocumentOptionsScreenComponent } from './sign-document-options-screen/sign-document-options-screen.component';
import { ExistingDocumentLoadButtonComponent } from './existing-document-load-button/existing-document-load-button.component';
import { UploadDocumentOptionsScreenComponent } from './upload-document-options-screen/upload-document-options-screen.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { SelectImageButtonComponent } from './select-image-button/select-image-button.component';
import { SelectImageFeatureComponent } from './select-image-feature/select-image-feature.component';
import { ExistingDocumentFeatureComponent } from './existing-document-feature/existing-document-feature.component';
import { TakeImageFeatureComponent } from './take-image-feature/take-image-feature.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'available-credit', component: AvailableCreditComponent },
  { path: 'buy-credit', component: BuyCreditComponent },
  { path: 'sign-options', component: SignDocumentOptionsScreenComponent },
  { path: 'upload-options', component: UploadDocumentOptionsScreenComponent },
  { path: 'select-image', component: SelectImageFeatureComponent },
  { path: 'existing-document', component: ExistingDocumentFeatureComponent },
  { path: 'take-image', component: TakeImageFeatureComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AvailableCreditComponent,
    BuyCreditComponent,
    SignDocumentButtonComponent,
    UploadDocumentButonComponent,
    FooterComponent,
    TakeImageButtonComponent,
    MakePdfButtonComponent,
    SelectDocumentComponent,
    SignDocumentOptionsScreenComponent,
    ExistingDocumentLoadButtonComponent,
    UploadDocumentOptionsScreenComponent,
    HomeButtonComponent,
    SelectImageButtonComponent,
    SelectImageFeatureComponent,
    ExistingDocumentFeatureComponent,
    TakeImageFeatureComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFontAwesomeModule
  ],
  providers: [ManageCreditService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
