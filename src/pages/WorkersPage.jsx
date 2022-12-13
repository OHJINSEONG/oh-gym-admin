import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { workerManageStore } from '../stores/WorkerManageStore';

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

const ProductList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 840px;
  
  li{
    width: 100px;
    height: 100px;
  }
  
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    width: 100%;
    height: 100%;
  }
`;

// const ProductRegister = styled.div`
//   border: 1px solid black;
//   margin-top: 20px;
//   padding: 10px 20px;
// `;

export default function WorkersPage() {
  const { workers } = workerManageStore;

  return (
    <Container>
      <p>Workers</p>
      <ProductList>
        {workers.map((worker) => (
          <li key={worker.id}>
            <Link className="item" to={`${worker.id}`}>
              {worker.name}
            </Link>
          </li>
        ))}
      </ProductList>
    </Container>
  );
}
