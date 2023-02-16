import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useMemberManageStore from '../hooks/useMemberManageStore';
import useProductManageStore from '../hooks/useProductManageStore';
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
    margin-bottom: 10px;
    
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

export default function MembersPage() {
  const navigator = useNavigate();

  const { workerId } = useParams();

  const workerManageStore = useWorkerManageStore();

  const find = async () => {
    await workerManageStore.findAllByInUseTicket(workerId);
    await workerManageStore.find(workerId);
  };

  useEffect(() => {
    find();
    console.log(workerManageStore.workerManagement);
  }, []);

  return (
    <Container>
      <h1>
        {workerManageStore.worker.userName}
        {' '}
        트레이너
      </h1>
      <p>회원 관리</p>
      {workerManageStore.workerManagement.length
        ? workerManageStore.workerManagement.map((management) => (
          <li key={management?.user.id}>
            <Link className="item" to={`${management?.user.id}`}>
              <TrainerInformation>
                <p>
                  이름:
                  {management.user.userName}
                </p>
                <div>
                  <p>
                    나이:
                    27
                  </p>
                  <p>
                    성별:
                    남자
                  </p>
                  <p>
                    전화 번호:
                    010-5239-8955
                  </p>
                </div>
              </TrainerInformation>
            </Link>
            {/* <button type="button" onClick={() => navigator(`${management?.user.id}/chats`)}>상담톡</button> */}
            <button type="button" className="admin" onClick={() => navigator(`${management?.user.id}`, { state: { diarys: management?.diarys, member: management.user } })}>운동일지</button>
          </li>
        ))
        : null}
    </Container>
  );
}
