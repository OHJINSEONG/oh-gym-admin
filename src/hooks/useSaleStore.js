import { useEffect } from 'react';
import { saleStore } from '../stores/SaleStore';
import useForceUpdate from './useForceUpdate';

export default function useSaleStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    saleStore.subscribe(forceUpdate);

    return () => saleStore.unsubscribe(forceUpdate);
  }, []);

  return saleStore;
}
