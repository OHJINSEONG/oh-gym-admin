import styled from 'styled-components';

const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 500px;
`;

export default function SalesPage() {
  return (
    <Container>
      <h1>Hello, MpGYM</h1>
    </Container>
  );
}
