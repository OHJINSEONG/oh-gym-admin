import { apiService } from '../services/ApiService';
import Store from './Store';

export default class WorkerManageStore extends Store {
  constructor() {
    super();
    this.workers = [{
      id: 1,
      name: '오진성',
    },
    {
      id: 2,
      name: '오진욱',
    },
    ];
  }
}

export const workerManageStore = new WorkerManageStore();
