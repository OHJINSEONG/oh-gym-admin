const { default: OrderStore } = require('./OrderStore');

const context = describe;

describe('orderStore', () => {
  let orderStore;

  beforeEach(() => {
    orderStore = new OrderStore();
  });

  describe('fetchOrders', () => {
    it('fetchOrders', async () => {
      await orderStore.fetchOrders();

      expect(orderStore.orders.length).toEqual(3);
    });
  });
});
