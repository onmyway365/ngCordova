import { Component, OnInit } from '@angular/core';
import { ManageCreditsService } from '../services/manage-credits.service';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.scss']
})
export class CreditsComponent {
  public creditsData: any;

  constructor(private manageCreditsService: ManageCreditsService) { }

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

}
