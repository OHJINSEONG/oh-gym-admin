import { apiService } from '../services/ApiService';
import Store from './Store';

export default class OrderStore extends Store {
  constructor() {
    super();
    this.orders = [];
  }

  async fetchOrders() {
    const orders = await apiService.fetchOrders();

    this.orders = orders;

    this.publish();
  }
}

export const orderStore = new OrderStore();
