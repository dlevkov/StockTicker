import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeAgoPipe } from 'time-ago-pipe';

import { MaterialModule } from '../../material/material.module';
import { MyPortfolioComponent } from './my-portfolio.component';
import { StockTrackerService } from './stock-tracker.service';

describe('MyPortfolioComponent', () => {
    let comp: MyPortfolioComponent;
    let fixture: ComponentFixture<MyPortfolioComponent>;

    beforeEach(() => {
        const simpleChangesStub = {
            selectedStockQuotes: {
                firstChange: {},
                currentValue: {}
            }
        };
        const stockTrackerServiceStub = {
            getStockRates: () => ({
                subscribe: () => ({})
            })
        };
        TestBed.configureTestingModule({
            imports: [MaterialModule],
            declarations: [ MyPortfolioComponent, TimeAgoPipe ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: StockTrackerService, useValue: stockTrackerServiceStub }
            ]
        });
        fixture = TestBed.createComponent(MyPortfolioComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
