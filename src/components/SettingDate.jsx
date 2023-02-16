import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { TimePicker } from 'react-ios-time-picker';

import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import useScheduleStore from '../hooks/useScheduleStore';
import { dateFormatter } from '../utils/DateFormatter';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 400px;
border: 1px solid #D1D1D1;
border-radius: 20px;
padding: 20px;
box-shadow: 0px 6px 6px 3px;

h1{
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
}

button{
  width: 200px;
  height: 40px;
  color: white;
  border-radius: 20px;
  margin-top: 20px;
  background-color: #EF781A;
}

select{
  text-align: center;
  appearance: none;
  width: 60px;
  height: 25px;
  color:gray;
  border: 1px solid #D1D1D1;
  border-radius: 5px;
}
`;

const TimePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2{
    font-size: 14px;
    margin-right: 10px;
    color: gray;
    font-weight: 600;
  }
`;

const DatePickerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid #D1D1D1;
  border-radius: 10px;
  padding: 10px;
  color: gray;
  margin-top: 10px;
  
`;

export default function SettingDate({ trainer, setValue }) {
  const scheduleStore = useScheduleStore();

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('10:00');
  const [options, setOptions] = useState('');

  const handleSubmitSchedule = async () => {
    const date = startDate.toISOString().split('T')[0];
    const dayOfWeek = options.split(' ').map((option) => Number(option));

    await scheduleStore.createSchedules({
      trainerId: trainer.id,
      date,
      countOfWeek: 4,
      startTime,
      endTime,
      dayOfWeek,
    });

    setValue((value) => value + 1);
  };

  useEffect(() => {
    console.log(startDate);
  }, [startDate]);

  const handleChangeDate = (date) => {
    setStartDate(date);
  };

  return (
    <Container>
      <div>
        <h1>시간 세팅</h1>
        <DatePickerWrapper>
          <DatePicker selected={startDate} value={`시작일 ${dateFormatter.localDateTime(new Date(startDate)).split('오')[0]}`} onChange={(date) => handleChangeDate(date)} />
          <div>
            <select onChange={(e) => setOptions(e.target.value)}>
              <option value="">반복 설정</option>
              <option value="1 2 3 4 5 6 7">매일</option>
              <option value="2 3 4 5 6">주중</option>
              <option value="2 4 6">월 수 금</option>
              <option value="3 5">화 목</option>
            </select>
          </div>
        </DatePickerWrapper>
        <TimePickerWrapper>
          <h2>시작 시간</h2>
          <TimePicker onChange={setStartTime} value={startTime} />
        </TimePickerWrapper>
        <TimePickerWrapper>
          <h2>마감 시간</h2>
          <TimePicker onChange={setEndTime} value={endTime} />
        </TimePickerWrapper>
      </div>
      <button type="button" onClick={handleSubmitSchedule}>추가</button>
    </Container>
  );
}

// 시작 날짜 와 종료 날짜 그리고 시간을 추가한다 .
