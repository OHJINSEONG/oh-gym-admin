import { apiService } from '../services/ApiService';
import Store from './Store';

export default class LectureStore extends Store {
  constructor() {
    super();
    this.lectures = [];
    this.lecture = {};
    this.ptSchedules = [];
  }

  async create(registerImformation) {
    const lecture = await apiService.createLecture(registerImformation);

    this.lecture = lecture;

    this.publish();
  }

  async fetchLectures(trainerId) {
    const lectures = await apiService.fetchLectures(trainerId);

    this.lectures = lectures;

    this.ptSchedules = lectures.map((lecture) => ({
      title: `${lecture.userName} 회원님`,
      allDay: false,
      start: new Date(`${lecture.date}T${lecture.time}`),
      end: new Date(`${lecture.date}T${Number(lecture.time.split(':')[0]) + 1}:00`),
    }));

    this.publish();
  }
}

export const lectureStore = new LectureStore();
