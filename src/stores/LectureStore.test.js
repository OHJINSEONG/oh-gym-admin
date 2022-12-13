const { default: LectureStore } = require('./LectureStore');

const context = describe;

describe('lectureStore', () => {
  let lectureStore;

  beforeEach(() => {
    lectureStore = new LectureStore();
  });

  describe('create', () => {
    it('create', async () => {
      await lectureStore.create({
        trainerId: 1,
        consumerId: 1,
        date: '2022-12-09T11:00',
      });

      expect(lectureStore.lecture.date).toEqual('2022-12-09T11:00');
    });
  });

  describe('fetchLectures', () => {
    it('fetchLectures', async () => {
      await lectureStore.fetchLectures(1);

      expect(lectureStore.lectures.length).toEqual(3);
    });
  });
});
