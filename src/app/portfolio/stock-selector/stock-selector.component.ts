import { Component, OnDestroy, OnInit, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { StockSelectorItem } from '../../dm';
import { DataProviderService } from './data-provider.service';

@Component({
  selector: 'dl-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit, OnDestroy, AfterViewInit {
  stockControl = new FormControl();
  stockItems: StockSelectorItem[];
  filteredItems: StockSelectorItem[];
  subscriber: Subscription;
  constructor(private dataProvider: DataProviderService) {
    this.stockItems = [];
    this.filteredItems = [];
  }

  ngOnInit() {
    this.subscriber = this.dataProvider
      .getSelectorItems()
      .filter(x => !x.isInUse)
      .subscribe(x => {
        this.stockItems.push(x);
      });
  }
  ngAfterViewInit(): void {
    this.filteredItems = this.stockItems;
  }
  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
  OnClick(e) {
    const foundIndex = this.stockItems.findIndex(x => x.name === e.value);
    if (foundIndex >= 0) {
      this.stockItems[foundIndex].isInUse = true;
      this.filteredItems = this.stockItems.filter(y => !y.isInUse);
    }
  }
}
