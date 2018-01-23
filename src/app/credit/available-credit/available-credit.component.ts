import { Component, OnInit } from '@angular/core';
import { ManageCreditService } from '../../services/manage-credit.service';

@Component({
  selector: 'app-available-credit',
  templateUrl: './available-credit.component.html',
  styleUrls: ['./available-credit.component.css']
})
export class AvailableCreditComponent implements OnInit {
  public creditsData: any;

  constructor(private manageCreditService: ManageCreditService) { }

  // ngOnInit() {
  //   this.getCreditsData();
  // }

  // getCreditsData(): void {
  //   this.manageCreditsService.getCredits()
  //   .subscribe(
  //   (data) => {
  //     this.creditsData = data;
  //   },
  //   (err) => console.log('Something went wrong with getting the Credits Data'),
  //   () => console.log('Observable complete')
  //   );
  // }

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
    alert('Available Credits Clicked!');
  }

}
