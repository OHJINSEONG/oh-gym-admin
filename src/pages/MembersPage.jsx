import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useMemberManageStore from '../hooks/useMemberManageStore';

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
  const memberManageStore = useMemberManageStore();

  const find = async () => {
    await memberManageStore.fetchMembers();
  };

  useEffect(() => {
    find();
    console.log(memberManageStore.members);
  }, []);

  return (
    <Container>
      <h1>
        회원 관리
      </h1>
      {memberManageStore.members.length
        ? memberManageStore.members.map((member) => (
          <li key={member.id}>
            <Link className="item" to={`${member.id}`}>
              <TrainerInformation>
                <p>
                  이름:
                  {member.userName}
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
            <button type="button" onClick={() => navigator(`${member?.user.id}/chats`)}>삭제</button>
          </li>
        ))
        : null}
    </Container>
  );
}
