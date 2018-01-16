import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { APP_CONFIG, AppConfig } from '../common/app.config';
import { Location } from '@angular/common';

import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ManageCreditsService {

  creditData: string = '50';

  public contextRoot: string;
  getCreditsURL: string;

  constructor(private location: Location, private http: HttpClient, private messageService: MessageService) {
    this.contextRoot = this.location.path();
    console.log('OnInit');
    console.log('Location Path: ' + this.contextRoot);
    this.getCreditsURL = '/api/?' + this.contextRoot;
  }

  getCredits () {
    return this.creditData;
  }

  getData() {
    return this.creditData;
  }

  /** GET credits from the server */
  // getCredits (): Observable<any> {
  //   const newURL = AppConfig.WebServiceURL + this.getCreditsURL;
  //   return this.http.get(newURL)
  //     .pipe(
  //       tap(credits => this.log(`fetched credits`)),
  //       catchError(this.handleError('getCredits', []))
  //     );
  // }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

}
