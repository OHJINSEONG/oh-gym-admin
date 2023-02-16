import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductAddOption from '../components/ProductAddOption';
import ProductRegister from '../components/ProductRegister';
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

export default function ProductRegisterPage() {
  const productFormStore = useProductFormStore();
  const productManageStore = useProductManageStore();
  const workerManageStore = useWorkerManageStore();

  const { workers } = workerManageStore;

  const [trainer, setTrainer] = useState({});
  const [mode, setMode] = useState(false);

  const { options } = productFormStore;

  useEffect(() => {
    console.log(options);
  }, [mode]);

  const handleClickCreate = (data) => {
    const productImformation = {
      title: data.title,
      trainerId: trainer.id,
      options,
      type: 'PT',
    };

    console.log(productImformation);

    productManageStore.create(productImformation);
  };

  const handleClickOptionDelete = (optionId) => {
    productFormStore.deleteOption(optionId);
  };

  if (mode) {
    return (
      <div>
        <ProductAddOption
          setMode={setMode}
        />
      </div>
    );
  }

  return (
    <Container>
      <ListWrapper>
        {workers.length ? workers.map((worker) => (
          <li key={worker.id} className={trainer.id === worker.id ? 'select' : ''}>
            <button type="button" onClick={() => setTrainer(worker)}>{worker.userName}</button>
          </li>
        ))
          : null}
      </ListWrapper>
      <ProductRegister
        handleClickCreate={handleClickCreate}
        setMode={setMode}
        trainer={trainer}
      />
      <ul>
        {options.map((option) => (
          <li key={option.id}>
            <p>
              옵션
              {options.findIndex((e) => e.id === option.id) + 1}
            </p>
            <p>
              이용일:
              {option.dateOfUse}
              일
            </p>
            <p>
              피티 횟수:
              {option.ptTimes}
              회
            </p>
            <p>
              가격:
              {option.price}
              원
            </p>
            <button type="button" onClick={() => handleClickOptionDelete(option.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </Container>
  );
}
