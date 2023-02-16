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

export default function TrainerRegister({ handleClickCreate }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClickCreate(data);
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>TrainerRegister</h2>
      <div>
        <label htmlFor="input-name">
          이름
        </label>
        <input
          id="input-name"
          type="text"
          {...register('name', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="input-userName">
          닉네임
        </label>
        <input
          id="input-userName"
          type="text"
          {...register('userName', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="input-image">
          이미지
        </label>
        <input
          id="input-image"
          type="text"
          {...register('image', { required: true })}
        />
      </div>
      <button type="submit">트레이너 등록</button>
    </Container>
  );
}
