const { default: TicketStore } = require('./TicketStore');

const context = describe;

describe('ticketStore', () => {
  let ticketStore;

  beforeEach(() => {
    ticketStore = new TicketStore();
  });

  describe('fetchTickets', () => {
    it('fetchTickets', async () => {
      await ticketStore.fetchTicket(1, '2022-12-25');

      expect(ticketStore.ticket.startDate).toEqual('2022-12-25');
    });
  });
});
