import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductAddOption from '../components/ProductAddOption';
import ProductRegister from '../components/ProductRegister';
import TrainerRegister from '../components/TrainerRegister';
import useProductFormStore from '../hooks/useProductFormStore';
import useProductManageStore from '../hooks/useProductManageStore';
import useWorkerManageStore from '../hooks/useWorkerManageStore';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  ul{
    margin-top: 50px;
  }

  li { 
    display: flex;
  }
  `;

const ListWrapper = styled.ul`
width: 850px;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 50px;


li{
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
color: black;
border: 1px solid #D1D1D1;
box-shadow: 0px 6px 6px 0px black;
}

.select{
background-color: #EF781A;
color: white;
box-shadow: 0px 6px 6px 0px black;
}
`;

export default function TrainerRegisterPage() {
  const workerManageStore = useWorkerManageStore();

  const handleClickCreate = (data) => {
    workerManageStore.create(data);
  };

  return (
    <Container>
      <TrainerRegister
        handleClickCreate={handleClickCreate}
      />
    </Container>
  );
}
