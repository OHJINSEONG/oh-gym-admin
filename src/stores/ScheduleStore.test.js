const { default: ScheduleStore } = require('./ScheduleStore');

const context = describe;

describe('scheduleStore', () => {
  let scheduleStore;

  beforeEach(() => {
    scheduleStore = new ScheduleStore();
  });

  describe('createSchedules', () => {
    it('createSchedules', async () => {
      await scheduleStore.createSchedules({ date: '2022-12-25' });

      expect(scheduleStore.schedules.length).toEqual(3);
    });
  });

  describe('fetchSchedules', () => {
    it('fetchSchedules', async () => {
      await scheduleStore.fetchSchedules(1);

      expect(scheduleStore.schedules.length).toEqual(4);
    });
  });
});
