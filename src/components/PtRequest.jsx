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
height: 500px;
`;

export default function PtRequest() {
  const messageStore = useMassageStore();
  const lectureStore = useLectureStore();

  const [mode, setMode] = useState(false);
  const [mod, setMod] = useState(false);

  const { requests, unCheckedCount } = messageStore;

  useEffect(() => {
    messageStore.fetchRequests(1);
  }, [mod]);

  const handleClickFetchRequest = () => {
    messageStore.fetchRequestsChecked(1);
    mode ? setMode(false)
      : setMode(true);
  };

  const handleClickApprove = (request) => {
    console.log(request.context);

    lectureStore.create({
      trainerId: request.receiverId,
      consumerId: request.senderId,
      date: request.context,
    });

    messageStore.requestDelete(request.id);

    lectureStore.fetchLectures(1);
    mod ? setMod(false)
      : setMod(true);
  };

  const handleClickRefuse = (requestId) => {
    messageStore.requestDelete(requestId);
    mod ? setMod(false)
      : setMod(true);
  };

  return (
    <Container>
      <p>{unCheckedCount}</p>
      <button type="button" onClick={handleClickFetchRequest}>피티 요청</button>
      <ul>
        {mode
          ? requests.map((request) => (
            <li key={request.id}>
              {request.message}
              <button type="button" onClick={() => handleClickApprove(request)}>승인</button>
              <button type="button" onClick={() => handleClickRefuse(request.id)}>취소</button>
            </li>
          ))
          : null}
      </ul>
    </Container>
  );
}
