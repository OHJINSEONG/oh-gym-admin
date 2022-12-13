import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { TimePicker } from 'react-ios-time-picker';

import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';
import useScheduleStore from '../hooks/useScheduleStore';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 50px;
height: 500px;
`;

export default function SettingDate() {
  const scheduleStore = useScheduleStore();

  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('10:00');
  const [options, setOptions] = useState('');

  const handleSubmitSchedule = () => {
    const date = startDate.toISOString().split('T')[0];
    const dayOfWeek = options.split(' ').map((option) => Number(option));

    scheduleStore.createSchedules({
      trainerId: 1,
      date,
      countOfWeek: 4,
      startTime,
      endTime,
      dayOfWeek,
    });
  };

  return (
    <Container>
      <div>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <TimePicker onChange={setStartTime} value={startTime} />
        <TimePicker onChange={setEndTime} value={endTime} />
      </div>
      <div>
        <select onChange={(e) => setOptions(e.target.value)}>
          <option value="">반복 설정</option>
          <option value="1 2 3 4 5 6 7">매일</option>
          <option value="2 3 4 5 6">주중</option>
          <option value="2 4 6">월 수 금</option>
          <option value="3 5">화 목</option>
        </select>
      </div>
      <button type="button" onClick={handleSubmitSchedule}>확인</button>
    </Container>
  );
}

// 시작 날짜 와 종료 날짜 그리고 시간을 추가한다 .
