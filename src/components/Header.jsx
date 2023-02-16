import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: .8em;
  font-weight: bold;
  width: 100%;
  height: 60px;
  background-color: #EF781A;
  border-bottom: solid 1px #D1D1D1;
  nav{
    height: 100%;
  }

  ul{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 30px;
      width: 890px;
      height: 100%;
  }

  li{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  a{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60%;
    color: white;
    border-right: 1px solid white;
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
          {/* <li>
            <Link to="/members">members</Link>
          </li> */}
          <li>
            <Link to="/workers">workers</Link>
          </li>
          <li>
            <Link to="/schedules">schedules</Link>
          </li>
          <li>
            <Link to="/lockers">lockers</Link>
          </li>
          <li>
            <Link to="/sales">sales</Link>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
