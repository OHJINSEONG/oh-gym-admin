import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styled from 'styled-components';
import useChattingRoomStore from '../hooks/useChattingRoomStore';
import useWorkerManageStore from '../hooks/useWorkerManageStore';
import { dateFormatter } from '../utils/DateFormatter';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  padding-top: 100px;
  background-color: white;
  

  h1{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    font-weight: 600;
    margin: 10px;

    img{
    width: 40px;
    height: 40px;
    border-radius: 10px;
    box-shadow: 0px 2px 6px 0px gray;
    margin-right: 10px;
  }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 700px;
  border: 1px solid #D1D1D1;
  border-radius: 20px;
  box-shadow: 0px 2px 6px 0px gray;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  .chattingList{
    background-color: #EF781A;
    color: white;
    box-shadow: 0px 3px 3px 3px gray;
  }
  
  button{
    width: 50%;
    height: 50px;
    font-size: 17px;
    font-weight: bold;
  }
`;

const ChattingBox = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 8px;
  overflow-y: auto;
`;

const ChattingRoomList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  width: 100%;  
  height: 100%;
`;

const ChattingRoom = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  button{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    width: 100%;
    font-size: 0.2px;
  }

  
`;

const ChattingRoomMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3px;
  padding-left: 10px;
  width: 470px;
  height: 65%;
  box-shadow: 0px 3px 3px 3px gray;
  border-radius: 10px;
`;

const ChattingOpponentInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 70%;
  height: 100%;
   
  p {
    font-size: 15px;
    text-align: start;
    word-break: break-all;
  }
`;

const OpponentName = styled.div`
  display: flex;
  align-items: flex-end;

  h2{
    font-weight: bold;
    font-size: 17px;
    margin-right: 3px;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    text-align: start;
    word-break: break-all;
  }
`;

const ChattingRoomTime = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  padding-top: 9px;

  h2{
    height: 16px;
    font-size: 12px;
  }

  p{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    font-size: 12px;
    padding: 6px 9px;
    border-radius: 50%;
    background-color: #EF781A;
    color : white
  }
`;

const EmptyChattingRoomWrapper = styled.div`
width: 100%;
height: 200px;
display: flex;
justify-content: center;
align-items: center;

  p{
    font-size: 1.2em;
    margin-top: 10px;
  }

  a{
    margin-left: 10px;
    padding: 10px;
    border-radius: 10px;
    color: white;
    background-color: #EF781A;
  }
`;

export default function ChattingList({ chattingRooms }) {
  const workerManageStore = useWorkerManageStore();

  const navigator = useNavigate();

  const { workerId } = useParams();

  const fetchChattingList = async () => {
    await workerManageStore.find(workerId);
  };

  useEffect(() => {
    fetchChattingList();
  }, []);

  return (
    <Container>
      <Wrapper>
        <h1>
          <img src={workerManageStore.worker.image} />
          {workerManageStore.worker.userName}
          {' '}
          트레이너
        </h1>
        <MenuWrapper>
          <button type="button" className="chatting">최근 톡</button>
          <button type="button" className="chattingList" onClick={() => navigator(`/workers/${workerId}/chats`)}>상담 목록</button>
        </MenuWrapper>
        <ChattingBox>
          <ChattingRoomList>
            {chattingRooms.filter((chattingRoom) => chattingRoom.chattingRoom.message).length
              ? chattingRooms
                .map((chattingRoom) => (chattingRoom.chattingRoom.message
                  ? (
                    <ChattingRoom key={chattingRoom.chattingRoom.id}>
                      <button type="button" onClick={() => navigator(`${chattingRoom.chattingRoom.id}`, { state: { worker: workerManageStore.worker } })}>
                        <ChattingRoomMessage>
                          <ChattingOpponentInformation>
                            <OpponentName>
                              <h2>
                                {chattingRoom.chattingRoom.userName}
                              </h2>
                              <p>
                                회원님
                              </p>
                            </OpponentName>
                            <p>{chattingRoom.chattingRoom.message.substring(0, 30)}</p>
                          </ChattingOpponentInformation>
                          <ChattingRoomTime>
                            <h2>{dateFormatter.localTime(chattingRoom.chattingRoom.updateTime)}</h2>
                            {chattingRoom.count
                              ? <p>{chattingRoom.count}</p>
                              : null}
                          </ChattingRoomTime>
                        </ChattingRoomMessage>
                      </button>
                    </ChattingRoom>
                  )
                  : null))
              : (
                <EmptyChattingRoomWrapper>
                  <p>채팅상대가 없습니다.</p>
                </EmptyChattingRoomWrapper>
              )}
          </ChattingRoomList>
        </ChattingBox>
      </Wrapper>
    </Container>
  );
}
