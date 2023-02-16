import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import useChattingRoomStore from '../hooks/useChattingRoomStore';
import useWorkerManageStore from '../hooks/useWorkerManageStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 830px;

  h1{
    font-size: 2em;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 30px 0px;
  
  button{
    width: 130px;
    height: 40px;
    border: 1px solid black;
  }
`;

const ChattingBox = styled.div`
  border: 1px solid black;
  margin-bottom: 50px;
  border-radius: 20px;
  height: 500px;
  width: 300px;
  overflow-y: auto;
`;

const ChattingRoomList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  padding-left: 11px;
  padding-right: 17px;
  background-color: white;
  width: 100%;

  
`;

export default function ChattingList() {
  const workerManageStore = useWorkerManageStore();

  const chattingRoomStore = useChattingRoomStore();
  const navigator = useNavigate();

  const { workerId } = useParams();

  const { chattingRooms } = chattingRoomStore;

  const fetchChattingList = async () => {
    await workerManageStore.find(workerId);

    chattingRoomStore.fetchChattingRooms(workerManageStore.worker.id);
  };

  useEffect(() => {
    fetchChattingList();
  }, []);

  return (
    <Container>
      <Wrapper>
        <h1>상담톡</h1>
        <MenuWrapper>
          <button type="button">최근 톡</button>
          <button type="button" onClick={() => navigator(`/workers/${workerId}/chats`)}>상담 목록</button>
        </MenuWrapper>
        <div>
          <ChattingBox>
            <ChattingRoomList>
              {chattingRooms.length ? chattingRooms
                .map((chattingRoom) => (
                  <li key={chattingRoom.id}>
                    <button
                      type="button"
                      onClick={() => navigator(`${chattingRoom.id}`, {
                        state: {
                          worker: workerManageStore.worker,
                        },
                      })}
                    >
                      {chattingRoom.userName}
                      님
                    </button>
                  </li>
                ))
                : <p>채팅상대가 없습니다.</p>}
            </ChattingRoomList>
          </ChattingBox>
        </div>
      </Wrapper>
    </Container>
  );
}
