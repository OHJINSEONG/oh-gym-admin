import { useEffect, useState } from 'react';
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
  padding-top: 70px;

  h1{
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 30px;
  }
  `;

const Wrapper = styled.div`
     display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

const ListWrapper = styled.ul`
      width: 850px;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;


    li{
      display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: black;
    border: 1px solid #D1D1D1;
    box-shadow: 0px 6px 6px 0px black;
    }

    .select{
      background-color: #EF781A;
      color: white;
      box-shadow: 0px 6px 6px 0px black;
    }
  `;

export default function WorkerSchedulesManagePage() {
  const { workers } = workerManageStore;

  const [trainer, setTrainer] = useState({});
  const [value, setValue] = useState(0);

  useEffect(() => {
    workerManageStore.fetchWorkers();
    console.log(workers);
  }, []);

  return (
    <Container>
      <ListWrapper>
        {workers.length ? workers.map((worker) => (
          <li key={worker.id} className={trainer.id === worker.id ? 'select' : ''}>
            <button type="button" onClick={() => setTrainer(worker)}>{worker.userName}</button>
          </li>
        ))
          : null}
      </ListWrapper>
      {Object.keys(trainer).length
        ? (
          <Wrapper>
            <h1>
              {trainer.userName}
              {' '}
              트레이너 시간표
            </h1>
            <SettingDate trainer={trainer} setValue={setValue} />
            <PtRequest trainer={trainer} setValue={setValue} />
            <Schedule trainer={trainer} value={value} />
          </Wrapper>
        )
        : null}

    </Container>
  );
}
