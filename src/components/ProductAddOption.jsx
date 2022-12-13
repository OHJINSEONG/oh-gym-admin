import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const Container = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 500px;
`;

const OptionAdd = styled.div`
  border: 1px solid black;
  margin-top: 20px;
  padding: 10px 20px;
`;

export default function ProductAddOption({ options, setMode }) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    options.push(data);
  };

  const handleClickOptionDelete = () => {
    options.splice(0);
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
          type="text"
          name="dateOfUse"
          {...register('dateOfUse')}
        />
      </div>
      <div>
        <label htmlFor="input-ptTimes">
          피티 횟수
        </label>
        <input
          id="input-ptTimes"
          type="text"
          name="ptTimes"
          {...register('ptTimes')}
        />
      </div>
      <div>
        <label htmlFor="input-dayOfWeek">
          피티 요일
        </label>
        <input
          id="input-dayOfWeek"
          type="text"
          name="dayOfWeek"
          {...register('dayOfWeek')}
        />
      </div>
      <div>
        <label htmlFor="input-time">
          피티 받는 시간
        </label>
        <input
          id="input-time"
          type="text"
          name="time"
          {...register('time')}
        />
      </div>
      <div>
        <label htmlFor="input-price">
          가격
        </label>
        <input
          id="input-price"
          type="text"
          name="price"
          {...register('price')}
        />
      </div>
      <OptionAdd>
        <button type="submit">추가</button>
      </OptionAdd>
      <button type="button" onClick={() => setMode(false)}>
        뒤로가기
      </button>
      <button type="button" onClick={handleClickOptionDelete}>옵션 제거</button>
    </Container>
  );
}
