import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { flatMap, map, tap } from 'rxjs/operators';

import * as DM from '../../dm';

@Injectable()
export class DataProviderService {
  constructor(private db: AngularFirestore) {}
  public getSelectorItems(): Observable<DM.StockSelectorItem> {
    return this.db
      .collection('stockItems')
      .valueChanges()
      .pipe(flatMap(x => x), map((x: any) => new DM.StockSelectorItem(x.name)));
  }
}
