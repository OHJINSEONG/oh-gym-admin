import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

h2{
  margin-bottom: 20px;
}
`;

const ProductOption = styled.div`
  border: 1px solid black;
  margin-top: 20px;
  padding: 10px 20px;
`;

export default function ProductRegister({ handleClickCreate, setMode, trainer }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClickCreate(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>ProductRegsiter</h2>
      <div>
        <label htmlFor="input-title">
          제목
        </label>
        <input
          id="input-title"
          type="text"
          name="title"
          {...register('title', { required: true })}
        />
      </div>
      <div>
        <p>
          트레이너
          {' '}
          {trainer.userName}
        </p>
      </div>
      <ProductOption>
        <button type="button" onClick={() => setMode(true)}>옵션 추가</button>
      </ProductOption>
      <button type="submit">상품 등록</button>
    </Container>
  );
}
