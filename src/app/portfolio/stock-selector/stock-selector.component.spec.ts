import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderModule } from 'ngx-order-pipe';
import { Observable } from 'rxjs/Observable';
import { from } from 'rxjs/observable/from';
import { StockSelectorItem } from '../../dm';
import { DataProviderService } from './data-provider.service';
import { StockSelectorComponent } from './stock-selector.component';
import 'rxjs/add/observable/from';

describe('StockSelectorComponent', () => {
  let comp: StockSelectorComponent;
  let fixture: ComponentFixture<StockSelectorComponent>;

  beforeEach(() => {
    const dataProviderServiceStub = {
      getSelectorItems: () => {
        return Observable.from([{ isInUse: true }, { isInUse: true }, { isInUse: false }]);
      }
    };
    TestBed.configureTestingModule({
      imports: [OrderModule],
      declarations: [StockSelectorComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: DataProviderService, useValue: dataProviderServiceStub }]
    });
    fixture = TestBed.createComponent(StockSelectorComponent);
    comp = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(comp).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const dataProviderServiceStub: DataProviderService = fixture.debugElement.injector.get(
        DataProviderService
      );
      spyOn(dataProviderServiceStub, 'getSelectorItems').and.callThrough();
      comp.ngOnInit();
      expect(dataProviderServiceStub.getSelectorItems).toHaveBeenCalled();
    });
  });
});
