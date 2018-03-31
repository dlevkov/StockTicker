import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dl-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  private selectedStockQuotes: string;
  constructor() {}

  ngOnInit() {}

  OnSelectedQuote(e) {
    this.selectedStockQuotes = e;
    console.log('selected', e);
  }
}
