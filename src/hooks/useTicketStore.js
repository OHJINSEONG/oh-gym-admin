import { useEffect } from 'react';
import { ticketStore } from '../stores/TicketStore';
import useForceUpdate from './useForceUpdate';

export default function useTicketStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    ticketStore.subscribe(forceUpdate);

    return () => ticketStore.unsubscribe(forceUpdate);
  }, []);

  return ticketStore;
}
