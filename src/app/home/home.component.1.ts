import { Component, OnInit } from '@angular/core';
import { ManageCreditService } from '../services/manage-credit.service';

declare var device;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public creditsData: any;
  public deviceDetails: any;

  constructor(private manageCreditService: ManageCreditService) { }

  ngOnInit() {
    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {

    }

    this.creditsData = this.getCreditsData();
    this.deviceDetails = this.getDeviceDetails();
  }

  getCreditsData() {
    return {
      'active': 'true',
      'credits': 200
    };
  }

  getDeviceDetails() {
    return {
      'deviceModel': device.model,
      'devicePlatform': device.platform,
      'deviceId': device.uuid,
      'deviceManufacturer': device.manufacturer,
      'deviceVersion': device.version,
      'deviceCordova': device.cordova,
      'deviceIsVirtual': device.isVirtual,
      'deviceSerial': device.serial
    };
  }

}
