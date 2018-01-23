import { Component, OnInit } from '@angular/core';
import { ManageCreditService } from '../../services/manage-credit.service';

@Component({
  selector: 'app-buy-credit',
  templateUrl: './buy-credit.component.html',
  styleUrls: ['./buy-credit.component.css']
})
export class BuyCreditComponent implements OnInit {
  public creditsData: any;

  constructor(private manageCreditService: ManageCreditService) { }

  clickButton() {
    alert('Buy Credits Clicked!');
  }

  ngOnInit() {
    this.creditsData = this.getCreditsData();
  }

  getCreditsData() {
    return {
      'active': 'true',
      'credits': 200
    };
  }

}
