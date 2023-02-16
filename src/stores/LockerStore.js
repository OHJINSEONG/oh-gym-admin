import { apiService } from '../services/ApiService';
import Store from './Store';

export default class LockerStore extends Store {
  constructor() {
    super();
    this.lockers = [];
    this.lockerImformation = [];
  }

  async fetchLockers() {
    const lockers = await apiService.fetchLockers();

    this.lockers = lockers;

    this.publish();
  }

  async findLocker(lockerId) {
    const lockerImformation = await apiService.findLocker(lockerId);

    this.lockerImformation = lockerImformation;

    this.publish();
  }

  async fetchLocker(lockerId, requestImformation) {
    const lockerImformation = await apiService.fetchLocker(lockerId, requestImformation);

    this.lockerImformation = lockerImformation;

    this.publish();
  }
}

export const lockerStore = new LockerStore();
