import { apiService } from '../services/ApiService';
import Store from './Store';

export default class TicketStore extends Store {
  constructor() {
    super();
    this.ticket = {};
  }

  async fetchTicket(ticketId, startDate) {
    const ticket = await apiService.fetchTicket(ticketId, startDate);

    console.log(startDate);

    this.ticket = ticket;

    this.publish();
  }

  async ticketCancel(ticketId) {
    const ticket = await apiService.cancelLockerTicket(ticketId);

    this.ticket = ticket;

    this.publish();
  }
}

export const ticketStore = new TicketStore();
