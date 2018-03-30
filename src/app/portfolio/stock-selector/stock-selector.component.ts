import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'dl-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {
  stockControl = new FormControl();
  stockItems: any[];

  constructor(private db: AngularFirestore) {}

  ngOnInit() {
    this.db
      .collection('stockItems')
      .valueChanges()
      .subscribe(x => {
        this.stockItems = x;
      });
  }
}
