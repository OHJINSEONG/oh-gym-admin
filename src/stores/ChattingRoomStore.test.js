const { default: ChattingRoomStore } = require('./ChattingRoomStore');

describe('chattingRoomStore', () => {
  let chattingRoomStore;

  beforeEach(() => {
    chattingRoomStore = new ChattingRoomStore();
  });

  describe('fetchChattingRooms', () => {
    it('fetchChattingRooms', async () => {
      await chattingRoomStore.fetchChattingRooms(1);

      expect(chattingRoomStore.chattingRooms.length).toEqual(2);
    });
  });
});
