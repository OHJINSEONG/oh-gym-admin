import { useEffect } from 'react';
import styled from 'styled-components';
import useLockerStore from '../hooks/useLockerStore';
import useTicketStore from '../hooks/useTicketStore';
import { dateFormatter } from '../utils/DateFormatter';

const Container = styled.div`
  width: 300px;
  height: 100px;
  z-index: 999;
  padding:  20px;
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(35%, 30%);
  background-color: white;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  h2{
    margin-bottom: 5px;
  }

  p{
    margin-bottom: 5px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
  margin-top: 10px;

  button{
    width: 100px;
    height: 30px;
    background-color: #EF781A;
    border-radius: 20px;
    color: white;
  }
`;

export default function LockerCancelModal({ lockerId, setCancelModalMode, cancelModalMode }) {
  const lockerStore = useLockerStore();
  const ticketStore = useTicketStore();

  const { lockerImformation } = lockerStore;

  const handleClickReject = async () => {
    await lockerStore.fetchLocker(lockerId, { requestMessage: 'REJECT' });
    await ticketStore.ticketCancel(lockerImformation.lockerTicket.id);
    setCancelModalMode(false);
  };

  useEffect(() => {
    lockerStore.findLocker(lockerId);
    console.log(lockerImformation);
  }, [cancelModalMode]);

  return (
    <Container>
      <Wrapper>
        <p>
          {lockerImformation.user?.userName}
          님이 락커 사용중.
        </p>
        <ButtonWrapper>
          <button type="button" onClick={handleClickReject}>사용자 제거</button>
          <button type="button" onClick={() => setCancelModalMode(false)}>취소</button>
        </ButtonWrapper>
      </Wrapper>
    </Container>
  );
}

// Todo: time을 이용하여 트레이너의 빈 시간을 가져온다.
// 어떻게 트레이너 시간을 가져ㅑ올까
// 시작 날짜와 종료 날짜 시간과 요일로 만들수 있다.....
// 이것을 하나의 스케줄
