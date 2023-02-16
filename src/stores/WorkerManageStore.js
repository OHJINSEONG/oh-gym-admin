import { apiService } from '../services/ApiService';
import Store from './Store';

export default class WorkerManageStore extends Store {
  constructor() {
    super();
    this.workers = [];
    this.worker = {};

    this.workerManagement = {};
  }

  async fetchWorkers() {
    const workers = await apiService.fetchWorkers();

    this.workers = workers;

    this.publish();
  }

  async find(workerId) {
    const worker = await apiService.findWorker(workerId);

    this.worker = worker;

    this.publish();
  }

  async findAllByInUseTicket(trainerId) {
    const workerManagement = await apiService.findAllByInUseTicket(trainerId);

    this.workerManagement = workerManagement;

    this.publish();
  }

  async create(trainerRegisterData) {
    const worker = await apiService.createTrainer(trainerRegisterData);

    this.worker = worker;

    this.publish();
  }
}

export const workerManageStore = new WorkerManageStore();
