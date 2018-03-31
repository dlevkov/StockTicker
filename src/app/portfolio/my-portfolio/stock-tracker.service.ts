import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { StockQuote } from '../../dm';
import { map, tap, flatMap } from 'rxjs/operators';
type API_KEYS = 'MJJOQ69Y676IMJWR' | 'OLF1CKCAYO59A7EF' | 'R0UTKBAMC74O24MF';

@Injectable()
export class StockTrackerService {
  private key: API_KEYS = 'MJJOQ69Y676IMJWR';
  constructor(private http: HttpClient) {}
  public getStockRates(stockList: string[]): Observable<StockQuote> {
    return this.http
      .get(
        `https://www.alphavantage.co/query?function=BATCH_STOCK_QUOTES&symbols=${this.convertToCSVString(
          stockList
        )}&apikey=${this.key}`
      )
      .pipe(
        flatMap((x: any) => x['Stock Quotes']),
        map(x => this.convertToStockItem(x))
      );
  }
  private convertToCSVString(stockList: string[]): string {
    const res = stockList.join(',');
    return res.toLowerCase();
  }
  private convertToStockItem(item: any): StockQuote {
    const res = new StockQuote();
    res.price = item['2. price'];
    res.symbol = item['1. symbol'];
    res.timestamp = item['4. timestamp'];
    res.volume = item['3. volume'];
    return res;
  }
}
