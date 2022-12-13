import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  font-size: .8em;
  font-weight: bold;
  width: 100%;
  height: 30px;
  background-color: white;
  border-bottom: solid 1px black;

  ul{
      display: flex;
      justify-content: space-between;
      width: 400px;
  }
`;

export default function Header() {
  return (
    <Container>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/members">members</Link>
          </li>
          <li>
            <Link to="/workers">workers</Link>
          </li>
          <li>
            <Link to="/products">products</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
