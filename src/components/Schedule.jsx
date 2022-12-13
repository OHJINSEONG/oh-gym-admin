import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useEffect } from 'react';
import useLectureStore from '../hooks/useLectureStore';
import useScheduleStore from '../hooks/useScheduleStore';

moment.locale('ko-KR');
const localizer = momentLocalizer(moment);

export default function Schedule() {
  const lectureStore = useLectureStore();
  const scheduleStore = useScheduleStore();

  const { trainerSchedules } = scheduleStore;
  const { ptSchedules } = lectureStore;

  useEffect(() => {
    lectureStore.fetchLectures(1);
    scheduleStore.fetchSchedules(1);
    console.log(ptSchedules);
  }, []);

  const message = {
    next: '다음 달',
    previous: '저번 달',
    today: '이번 달',
    month: '월간',
    week: '주간',
    day: '일간',
    agenda: '이번달 계획표',
  };

  const schedule = [...ptSchedules, ...trainerSchedules];

  return (
    <div>
      <div>
        <Calendar
          localizer={localizer}
          events={schedule}
          style={{ height: 500, width: 1600 }}
          min={new Date(2022, 11, 9, 9, 0)}
          max={new Date(2022, 11, 9, 18, 0)}
          step={30}
          messages={message}
        />
      </div>
    </div>
  );
}

// Todo: time을 이용하여 트레이너의 빈 시간을 가져온다.
// 어떻게 트레이너 시간을 가져ㅑ올까
// 시작 날짜와 종료 날짜 시간과 요일로 만들수 있다.....
// 이것을 하나의 스케줄
