import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PortfolioComponent } from './portfolio.component';

describe('PortfolioComponent', () => {
    let comp: PortfolioComponent;
    let fixture: ComponentFixture<PortfolioComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ PortfolioComponent ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });
        fixture = TestBed.createComponent(PortfolioComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeTruthy();
    });

});
