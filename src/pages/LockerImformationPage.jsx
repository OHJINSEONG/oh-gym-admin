import styled from 'styled-components';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useLockerStore from '../hooks/useLockerStore';

import useTicketStore from '../hooks/useTicketStore';
import { dateFormatter } from '../utils/DateFormatter';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export default function LockerImformationPage() {
  const ticketStore = useTicketStore();
  const lockerStore = useLockerStore();

  const { lockerId } = useParams();

  const { lockerImformation } = lockerStore;
  const { locker, user, lockerTicket } = lockerImformation;

  const startDate = dateFormatter.localDate(new Date());

  useEffect(() => {
    lockerStore.findLocker(lockerId);
    console.log(locker);
    console.log(user);
  }, []);

  const handleClickReservate = () => {
    lockerStore.fetchLocker(lockerId, { requestMessage: 'APPROVE' });
    ticketStore.fetchTicket(lockerTicket.id, startDate);
  };

  const handleClickReject = () => {
    lockerStore.fetchLocker(lockerId, { requestMessage: 'REJECT' });
  };

  if (locker?.status === 'RESERVATED') {
    return (
      <Container>
        <h2>Locker</h2>
        <p>
          {user.userName}
          님이 락카를 신청하셨습니다.
        </p>
        <button type="button" onClick={handleClickReservate}>승인</button>
        <button type="button" onClick={handleClickReject}>거절</button>
      </Container>
    );
  }

  return (
    <Container>
      <h2>Locker</h2>
      {locker?.status === 'INUSE'
        ? (
          <div>
            <p>
              {user.userName}
              님이 락카사용중
            </p>
            <button type="button" onClick={handleClickReject}>사용자 제거</button>
          </div>
        )
        : <button type="button">사용 불가로 변경</button> }
    </Container>
  );
}
