import { TestBed, inject } from '@angular/core/testing';

import { ManageCreditsService } from './manage-credits.service';

describe('ManageCreditsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageCreditsService]
    });
  });

  it('should be created', inject([ManageCreditsService], (service: ManageCreditsService) => {
    expect(service).toBeTruthy();
  }));
});
