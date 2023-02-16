import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useLockerStore from '../hooks/useLockerStore';
import LockerApproveModal from '../components/LockerApproveModal';
import LockerCancelModal from '../components/LockerCancelModal';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 80px;
  height: 900px;

  h1{
    width: 90%;
    font-size: 28px;
    font-weight: 600;
    border-bottom: 1px solid #D1D1D1;
    padding: 20px;
    margin-bottom: 50px;
  }

  ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 670px;
}

  li{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid black;
}

  button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color : white;
}

  .AVAILABLE{ 
  background-color: #97a6c2;
}

  .RESERVED{ 
  background-color: red;
}

  .INUSE{ 
  background-color: #d7d7d7;
}

.NOUSE{ 
  background-color: black;
}

`;

const LockerStatus = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 250px;
  width: 45%;
  padding-left: 20px;
  font-size: 7px;
  margin-bottom: 10px;

  .inUse{
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      width: 10px;
      height: 10px;
      background-color: #d7d7d7;
      margin-right: 2px;
      margin-bottom: 2px;
    }
  }

  .reserved{
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      width: 10px;
      height: 10px;
      background-color: red;
      margin-right: 2px;
      margin-bottom: 2px;
    }
  }

  .my{
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      width: 10px;
      height: 10px;
      background-color: #EF781A;
      margin-right: 2px;
      margin-bottom: 2px;
    }
  }

  .available{
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      width: 10px;
      height: 10px;
      background-color: #97a6c2;
      margin-right: 2px;
      margin-bottom: 2px;
    }
  }

  .noUse{
    display: flex;
    justify-content: center;
    align-items: center;

    p{
      width: 10px;
      height: 10px;
      background-color: black;
      margin-right: 2px;
      margin-bottom: 2px;
    }
  }
`;

export default function LockersPage() {
  const lockerStore = useLockerStore();
  const [modalMode, setModalMode] = useState(false);
  const [cancelModalMode, setCancelModalMode] = useState(false);
  const [lockerId, setLockerId] = useState(0);

  useEffect(() => {
    lockerStore.fetchLockers();
  }, []);

  const { lockers } = lockerStore;

  const inUseLockerCount = lockers.filter((e) => e.status === 'INUSE').length;

  const reservedLockerCount = lockers.filter((e) => e.status === 'RESERVED').length;

  const unavailableLockerCount = lockers.filter((e) => e.status === 'NOUSE').length;

  const availableLockerCount = lockers.length
  - inUseLockerCount - unavailableLockerCount - reservedLockerCount;

  const handleClickModal = (locker) => {
    if (locker.status === 'RESERVED') {
      setLockerId(locker.id);
      setModalMode(true);
    }

    if (locker.status === 'INUSE') {
      setLockerId(locker.id);
      setCancelModalMode(true);
    }
  };

  return (
    <Container>
      {modalMode ? (
        <LockerApproveModal
          lockerId={lockerId}
          setModalMode={setModalMode}
          modalMode={modalMode}
        />
      )
        : null}
      {cancelModalMode ? (
        <LockerCancelModal
          lockerId={lockerId}
          setCancelModalMode={setCancelModalMode}
          cancleModalMode={cancelModalMode}
        />
      )
        : null}
      <h1>Lockers</h1>
      <LockerStatus>
        <div className="inUse">
          <p />
          사용중
          {`(${inUseLockerCount})`}
        </div>
        <div className="available">
          <p />
          사용가능
          {`(${availableLockerCount})`}
        </div>
        <div className="noUse">
          <p />
          사용불가
          {`(${unavailableLockerCount})`}
        </div>
        <div className="reserved">
          <p />
          예약중
          {`(${reservedLockerCount})`}
        </div>
      </LockerStatus>
      <ul>
        {lockers.map((locker) => (
          <li key={locker.id} className={locker.status}>
            <button type="button" onClick={() => handleClickModal(locker)}>
              {locker.lockerNumber}
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
