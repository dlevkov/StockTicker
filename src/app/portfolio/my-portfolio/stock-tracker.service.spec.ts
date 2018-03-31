import { TestBed, inject } from '@angular/core/testing';

import { StockTrackerService } from './stock-tracker.service';

describe('StockTrackerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockTrackerService]
    });
  });

  it('should be created', inject([StockTrackerService], (service: StockTrackerService) => {
    expect(service).toBeTruthy();
  }));
});
