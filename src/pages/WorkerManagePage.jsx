import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PtRequest from '../components/PtRequest';
import Schedule from '../components/Schedule';
import SettingDate from '../components/SettingDate';
import { workerManageStore } from '../stores/WorkerManageStore';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 750px;  
  `;

export default function WorkerManagePage() {
  const { workerId } = useParams();

  const { workers } = workerManageStore;

  console.log(workers[workerId - 1]);

  return (
    <Container>
      <SettingDate />
      <PtRequest />
      <Schedule />
    </Container>
  );
}
