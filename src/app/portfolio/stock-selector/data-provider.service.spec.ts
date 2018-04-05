import { TestBed, inject } from '@angular/core/testing';

import { DataProviderService } from './data-provider.service';
import { AngularFirestore } from 'angularfire2/firestore';

describe('DataProviderService', () => {
  const angularFirestoreStub = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DataProviderService,
        { provide: AngularFirestore, useValue: angularFirestoreStub }
      ]
    });
  });

  it(
    'should be created',
    inject([DataProviderService], (service: DataProviderService) => {
      expect(service).toBeTruthy();
    })
  );
});
