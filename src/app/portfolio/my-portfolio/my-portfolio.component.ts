import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';

import { StockQuote } from '../../dm';
import { StockTrackerService } from './stock-tracker.service';

@Component({
  selector: 'dl-my-portfolio',
  templateUrl: './my-portfolio.component.html',
  styleUrls: ['./my-portfolio.component.css']
})
export class MyPortfolioComponent implements OnInit, OnChanges {
  @Input() selectedStockQuotes: string;
  @Output() removeItem = new EventEmitter();
  private stockQuoteItemNames: string[];
  public stockQuotes: StockQuote[];
  constructor(private stockTracker: StockTrackerService) {
    this.stockQuoteItemNames = [];
    this.stockQuotes = [];
  }

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.selectedStockQuotes.firstChange) {
      this.stockQuoteItemNames.push(changes.selectedStockQuotes.currentValue);
      this.stockQuotes = [];
      this.refreshQuotes();
    }
  }
  private refreshQuotes(): void {
    this.stockTracker.getStockRates(this.stockQuoteItemNames).subscribe(x => {
      this.stockQuotes.push(x);
    });
  }
  private removeItemByName(name: string) {
    this.removeItem.emit(name);
    this.removeFromNamesByName(name);
    this.removeFromStockQuotesByName(name);
  }
  private removeFromStockQuotesByName(name: string): void {
    const found = this.stockQuotes.findIndex(x => x.symbol === name);
    if (found >= 0) {
      this.stockQuotes.splice(found, 1);
    }
  }
  private removeFromNamesByName(name: string): void {
    const found = this.stockQuoteItemNames.findIndex(x => x === name);
    if (found >= 0) {
      this.stockQuoteItemNames.splice(found, 1);
    }
  }
}
