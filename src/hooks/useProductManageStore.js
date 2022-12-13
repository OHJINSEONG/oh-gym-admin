import { useEffect } from 'react';
import { productManageStore } from '../stores/ProductManageStore';
import useForceUpdate from './useForceUpdate';

export default function useProductManageStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    productManageStore.subscribe(forceUpdate);

    return () => productManageStore.unsubscribe(forceUpdate);
  }, []);

  return productManageStore;
}
