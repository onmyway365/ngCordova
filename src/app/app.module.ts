import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CreditsComponent } from './credits/credits.component';
import {ManageCreditsService} from './services/manage-credits.service';
import {MessageService} from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    CreditsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ManageCreditsService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
