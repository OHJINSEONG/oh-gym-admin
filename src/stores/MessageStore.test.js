const { default: MessageStore } = require('./MessageStore');

const context = describe;

describe('lectureStore', () => {
  let messageStore;

  beforeEach(() => {
    messageStore = new MessageStore();
  });

  describe('fetchRequests', () => {
    it('fetchRequests', async () => {
      await messageStore.fetchRequests(1);

      expect(messageStore.requests.length).toEqual(2);
    });
  });
});
