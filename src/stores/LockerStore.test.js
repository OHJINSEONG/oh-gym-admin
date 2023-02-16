const { default: LockerStore } = require('./LockerStore');

const context = describe;

describe('lockerStore', () => {
  let lockerStore;

  beforeEach(() => {
    lockerStore = new LockerStore();
  });

  describe('fetchLockers', () => {
    it('fetchLockers', async () => {
      await lockerStore.fetchLockers();

      expect(lockerStore.lockers.length).toEqual(2);
    });
  });

  describe('findLocker', () => {
    it('findLocker', async () => {
      await lockerStore.findLocker(1);

      expect(lockerStore.lockerImformation.lockerNumber).toEqual(1);
    });
  });

  describe('fetchLocker', () => {
    it('fetchLocker', async () => {
      await lockerStore.fetchLocker(1, { userId: 1, requestMessage: 'RESERVATED' });

      expect(lockerStore.lockerImformation.status).toEqual('RESERVATED');
    });
  });
});
