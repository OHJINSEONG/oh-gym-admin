const { default: WorkerManageStore } = require('./WorkerManageStore');

const context = describe;

describe('workerManageStore', () => {
  let workerManageStore;

  beforeEach(() => {
    workerManageStore = new WorkerManageStore();
  });

  describe('fetchWorkers', () => {
    it('fetchWorkers', async () => {
      await workerManageStore.fetchWorkers();

      expect(workerManageStore.workers.length).toEqual(3);
    });
  });

  describe('find', () => {
    it('find', async () => {
      await workerManageStore.find(1);

      expect(workerManageStore.worker.name).toEqual('오진성');
    });
  });
});
