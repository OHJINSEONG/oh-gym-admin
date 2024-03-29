import styled from 'styled-components';

import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export default function MemberImformationPage() {
  const location = useLocation();

  const { diarys, member } = location.state;

  useEffect(() => {
    console.log(diarys);
    console.log(member);
  }, []);

  return (
    <Container>
      <p>{member.userName}</p>
    </Container>
  );
}
