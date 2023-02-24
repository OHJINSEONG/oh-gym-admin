/* eslint-disable no-unused-expressions */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useLectureStore from '../hooks/useLectureStore';
import useMassageStore from '../hooks/useMessageStore';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 500px;
margin-top: 20px;
margin-bottom: 20px;

ul{
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  align-items: center;
  width: 100%;
  
  max-height: 400px;
}

`;

const PtRequestWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
  border: 1px solid #D1D1D1;
  padding: 8px;

  p{
    font-size: 12px;
  }
`;

const PtRequestButton = styled.button`
  width: 80px;
  height: 40px;
  border: 1px solid #D1D1D1;
  border-radius: 20px;

  div{
    position: relative;
    left: 80%;
    bottom: 40%;
  }
  
  .alarm{
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    font-size: 10px;
    border-radius: 50%;
    color: white;
    background-color: #EF781A;
}
`;

const PtRequestButtonWrapper = styled.div`
  display: flex;

  button{
  width: 50px;
  height: 23px;
  font-size: 12px;
  color: white;
  border-radius: 20px;
  background-color: #EF781A;
  margin-right: 5px;
  }
`;

export default function PtRequest({ trainer, setValue }) {
  const messageStore = useMassageStore();
  const lectureStore = useLectureStore();

  const [mode, setMode] = useState(false);
  const [mod, setMod] = useState(false);

  const { requests, unCheckedCount } = messageStore;

  useEffect(() => {
    messageStore.fetchRequests(trainer.id);
  }, [mod, trainer.id]);

  const handleClickFetchRequest = () => {
    messageStore.fetchRequestsChecked(trainer.id);
    mode ? setMode(false)
      : setMode(true);
  };

  const handleClickApprove = async (request) => {
    await lectureStore.approve(request.lectureId, request.senderId, request.message);

    await messageStore.requestDelete(request.id);

    await lectureStore.fetchLectures(trainer.id);

    mod ? setMod(false)
      : setMod(true);

    setValue((value) => value + 1);
  };

  const handleClickRefuse = async (request) => {
    await lectureStore.delete(request.lectureId, request.senderId, request.message);

    await messageStore.requestDelete(request.id);

    mod ? setMod(false)
      : setMod(true);

    setValue((value) => value + 1);
  };

  return (
    <Container>
      <PtRequestButton type="button" onClick={handleClickFetchRequest}>
        {unCheckedCount === 0
          ? null
          : (
            <div>
              <p className="alarm">{unCheckedCount}</p>
            </div>
          ) }
        피티 요청
      </PtRequestButton>
      <ul>
        {mode
          ? requests.filter((e) => e.status !== 'DELETED').map((request) => (
            <PtRequestWrapper key={request.id}>
              <p>{request.message}</p>
              <PtRequestButtonWrapper>
                <button type="button" onClick={() => handleClickApprove(request)}>승인</button>
                <button type="button" onClick={() => handleClickRefuse(request)}>취소</button>
              </PtRequestButtonWrapper>
            </PtRequestWrapper>
          ))
          : null}
      </ul>
    </Container>
  );
}
