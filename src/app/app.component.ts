import { Component, OnInit } from '@angular/core';
import { ManageCreditsService } from './services/manage-credits.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public creditsData: any;
  title = 'Image Gallery';

  constructor(private manageCreditsService: ManageCreditsService) { }

  ngOnInit() {
    this.creditsData = this.getCreditsData();
  }

  getCreditsData() {
    return {
      'active': 'true',
      'credits': 200
    };
  }

  clickButton() {
    alert('Button clicked');
  }

}
