import { useEffect } from 'react';
import { memberManageStore } from '../stores/MemberManageStore';
import useForceUpdate from './useForceUpdate';

export default function useMemberManageStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    memberManageStore.subscribe(forceUpdate);

    return () => memberManageStore.unsubscribe(forceUpdate);
  }, []);

  return memberManageStore;
}
