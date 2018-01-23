import { TestBed, inject } from '@angular/core/testing';

import { ManageCreditService } from './manage-credit.service';

describe('ManageCreditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ManageCreditService]
    });
  });

  it('should be created', inject([ManageCreditService], (service: ManageCreditService) => {
    expect(service).toBeTruthy();
  }));
});
