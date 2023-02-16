import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import useProductFormStore from '../hooks/useProductFormStore';

const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 100px;
`;

const OptionAdd = styled.div`
  border: 1px solid black;
  margin-top: 20px;
  padding: 10px 20px;
`;

export default function ProductAddOption({ setMode }) {
  const productFormStore = useProductFormStore();

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    productFormStore.addOption({ type: 'PT', ...data });
    setMode(false);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>ProductOption</h2>
      <div>
        <label htmlFor="input-dateOfUse">
          기간
        </label>
        <input
          id="input-dateOfUse"
          type="number"
          name="dateOfUse"
          {...register('dateOfUse', { required: true })}
        />
        일
      </div>
      <div>
        <label htmlFor="input-ptTimes">
          피티 횟수
        </label>
        <input
          id="input-ptTimes"
          type="number"
          name="ptTimes"
          {...register('ptTimes', { required: true })}
        />
        회
      </div>
      <div>
        <label htmlFor="input-price">
          가격
        </label>
        <input
          id="input-price"
          type="number"
          name="price"
          {...register('price', { required: true })}
        />
        원
      </div>
      <OptionAdd>
        <button type="submit">추가</button>
      </OptionAdd>
      <button type="button" onClick={() => setMode(false)}>
        뒤로가기
      </button>
    </Container>
  );
}
