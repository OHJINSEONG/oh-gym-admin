const { default: ProductFormStore } = require('./ProductFormStore');

const context = describe;

describe('productFormStore', () => {
  let productFormStore;

  beforeEach(() => {
    productFormStore = new ProductFormStore();
  });

  describe('addOption', () => {
    it('addOption', () => {
      productFormStore.addOption({ dateOfUse: 90, ptTimes: 12, price: 360000 });

      expect(productFormStore.options[0].id).toEqual(1);
      expect(productFormStore.options[0].ptTimes).toEqual(12);
    });
  });

  describe('deleteOption', () => {
    it('deleteOption', () => {
      productFormStore.addOption({ dateOfUse: 90, ptTimes: 12, price: 360000 });
      productFormStore.deleteOption(1);

      expect(productFormStore.options[0]).toEqual(undefined);
    });
  });
});
