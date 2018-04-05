import { TestBed, inject } from '@angular/core/testing';

import { StockTrackerService } from './stock-tracker.service';
import { HttpClient } from '@angular/common/http';

describe('StockTrackerService', () => {
  const httpClientStub = {};
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StockTrackerService, { provide: HttpClient, useValue: httpClientStub }]
    });
  });

  it(
    'should be created',
    inject([StockTrackerService], (service: StockTrackerService) => {
      expect(service).toBeTruthy();
    })
  );
});
