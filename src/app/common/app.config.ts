import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { InjectionToken } from '@angular/core';

export let APP_CONFIG = new InjectionToken ('app.config');

export interface IAppConfig {
  WebServiceURL: string;
  MaturityServiceURL: string;
}

export const AppConfig: IAppConfig = {
  WebServiceURL: 'http://demoncat.chop.standardbank.co.za',
  MaturityServiceURL: 'http://178.62.75.15:8081/pipeline?teamName='
};

