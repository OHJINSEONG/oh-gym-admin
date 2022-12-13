const { default: ProductManageStore } = require('./ProductManageStore');

const context = describe;

describe('lectureStore', () => {
  let productManageStore;

  beforeEach(() => {
    productManageStore = new ProductManageStore();
  });

  describe('fetchProducts', () => {
    it('fetchProducts', async () => {
      await productManageStore.fetchProducts();

      expect(productManageStore.products.length).toEqual(2);
    });
  });

  describe('create', () => {
    it('create', async () => {
      await productManageStore.create({
        title: '피티',
        trainerId: 1,
        options: [
          {
            dateOfUse: 30,
            ptTimes: 12,
            price: 180000,
          },
          {
            dateOfUse: 90,
            ptTimes: 30,
            price: 360000,
          },
        ],
      });

      expect(productManageStore.product.title).toEqual('피티');
    });
  });
});
