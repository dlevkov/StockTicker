export class StockSelectorItem {

  isInUse: boolean;
  /**
   * Creates an instance of StockSelectorItem.
   * @param {boolean} [inUse=false] not in use by default
   * @memberof StockSelectorItem
   */
  constructor(public name: string, inUse = false) {
    this.isInUse = inUse;
  }
}
