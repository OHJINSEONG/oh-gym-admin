import { apiService } from '../services/ApiService';
import Store from './Store';

export default class MessageStore extends Store {
  constructor() {
    super();
    this.requests = [];
    this.unCheckedCount = 0;
  }

  async fetchRequests(trainerId) {
    const requests = await apiService.fetchRequests(trainerId);

    this.unCheckedCount = requests.reduce((accu, request) => (request.status === 'CREATED' ? accu + 1 : accu + 0), 0);

    this.requests = requests.filter((request) => request.status !== 'DELETED');

    this.publish();
  }

  async requestDelete(requestId) {
    await apiService.requestDelete(requestId);

    this.publish();
  }

  async fetchRequestsChecked(trainerId) {
    await apiService.fetchRequestsChecked(trainerId);

    this.unCheckedCount = 0;

    this.publish();
  }
}

export const messageStore = new MessageStore();
