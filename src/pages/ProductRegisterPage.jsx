import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductAddOption from '../components/ProductAddOption';
import ProductRegister from '../components/ProductRegister';
import useProductFormStore from '../hooks/useProductFormStore';
import useProductManageStore from '../hooks/useProductManageStore';

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

export default function ProductRegisterPage() {
  const productFormStore = useProductFormStore();
  const productManageStore = useProductManageStore();

  const [mode, setMode] = useState(false);

  const { options } = productFormStore;

  useEffect(() => {
    console.log(options);
  }, [mode]);

  const handleClickCreate = (data) => {
    const productImformation = {
      title: data.title,
      trainerId: 1,
      options,
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
      <ProductRegister
        handleClickCreate={handleClickCreate}
        setMode={setMode}
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
