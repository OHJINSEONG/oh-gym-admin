import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import useWorkerManageStore from '../hooks/useWorkerManageStore';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export default function WorkerImformationPage() {
  const workerManageStore = useWorkerManageStore();

  const { workerId } = useParams();

  const { worker } = workerManageStore;

  useEffect(() => {
    workerManageStore.find(workerId);
  }, []);

  return (
    <Container>
      <p>{worker.name}</p>
    </Container>
  );
}
