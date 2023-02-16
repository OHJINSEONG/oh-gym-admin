const { default: OrderStore } = require('./OrderStore');
const { default: SaleStore } = require('./SaleStore');

const context = describe;

describe('saleStore', () => {
  let saleStore;
  let orderStore;

  beforeEach(() => {
    saleStore = new SaleStore();
    orderStore = new OrderStore();
  });

  describe('createDateChart', () => {
    it('createDateChart', async () => {
      await orderStore.fetchOrders();
      const dateChart = saleStore.createDateChart('2022-12-25', orderStore.orders);

      expect(dateChart.lockerPrice).toEqual(360000);
      expect(dateChart.membershipPrice).toEqual(360000);
      expect(dateChart.ptPrice).toEqual(360000);
    });
  });

  describe('createMonthChart', () => {
    it('createMonthChart', async () => {
      await orderStore.fetchOrders();
      const monthChart = saleStore.createMonthChart('2022-12', orderStore.orders);

      expect(monthChart.lockerPrice).toEqual(360000);
      expect(monthChart.membershipPrice).toEqual(360000);
      expect(monthChart.ptPrice).toEqual(360000);
    });
  });
});
