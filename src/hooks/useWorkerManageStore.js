import { useEffect } from 'react';
import { workerManageStore } from '../stores/WorkerManageStore';
import useForceUpdate from './useForceUpdate';

export default function useWorkerManageStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    workerManageStore.subscribe(forceUpdate);

    return () => workerManageStore.unsubscribe(forceUpdate);
  }, []);

  return workerManageStore;
}
