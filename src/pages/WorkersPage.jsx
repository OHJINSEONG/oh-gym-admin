import styled from 'styled-components';

import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useWorkerManageStore from '../hooks/useWorkerManageStore';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  h1{
    width: 90%;
    font-size: 30px;
    padding: 20px;
    font-weight: 600;
    border-bottom: 1px solid #D1D1D1;
    
  }

  li {
    display: flex;  
    justify-content: center;
    align-items: center; 
    margin: 10px 0;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center; 
    justify-content: space-between;
    width: 700px;
    height: 100%;
    padding: 10px;
    border: 1px solid #D1D1D1;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 500;
  }
  
  button{
    display: flex;
    justify-content: center;
    align-items: center; 
    width: 50px;
    height: 30px;
    font-size: 12px;
    color: white;
    background-color: #EF781A;
    margin-left: 10px;
    border-radius: 20px;
    box-shadow: 0px 3px 3px 0px gray;
  }

  .admin{
    background-color: #41458d;
  }
`;

const TrainerInformation = styled.div`
    display: flex;  
    justify-content: center;
    align-items: center; 
    justify-content: space-between;
    width: 100%; 

    div{
      display: flex;
      width: 60%;
      justify-content: space-between;
    }
`;

export default function WorkersPage() {
  const workerManageStore = useWorkerManageStore();
  const navigator = useNavigate();

  useEffect(() => {
    workerManageStore.fetchWorkers();
  }, []);

  const { workers } = workerManageStore;

  return (
    <Container>
      <h1>Workers</h1>
      {workers.map((worker) => (
        <li key={worker.id}>
          <Link className="item" to={`${worker.id}`}>
            <TrainerInformation>
              <p>
                이름:
                {' '}
                {worker.name}
              </p>
              <div>
                <p>
                  닉네임:
                  {' '}
                  {worker.userName}
                </p>
                <p>
                  나이:
                  {' '}
                  {worker.age}
                </p>
                <p>
                  성별:
                  {' '}
                  {worker.gender}
                </p>
                <p>
                  전화 번호:
                  {' '}
                  {worker.phoneNumber}
                </p>
              </div>
            </TrainerInformation>
          </Link>
          <button type="button" onClick={() => navigator(`${worker.id}/chats`)}>상담톡</button>
          <button type="button" className="admin" onClick={() => navigator(`${worker.id}/members`)}>회원관리</button>
        </li>
      ))}
    </Container>
  );
}
