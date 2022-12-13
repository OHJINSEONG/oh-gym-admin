import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ScheduleStore extends Store {
  constructor() {
    super();
    this.unCheckedCount = 0;
    this.schedules = [];
    this.trainerSchedules = [];
  }

  async createSchedules(scheduleImformation) {
    const schedules = await apiService.createSchedules(scheduleImformation);

    this.schedules = schedules;

    this.publish();
  }

  async fetchSchedules(trainerId) {
    const schedules = await apiService.fetchSchedules(trainerId);

    this.schedules = schedules;

    this.trainerSchedules = schedules.map((schedule) => ({
      title: 'PT가능 시간',
      allDay: false,
      start: new Date(`${schedule.date}T${schedule.startTime}`),
      end: new Date(`${schedule.date}T${schedule.endTime}`),
    }));

    this.publish();
  }
}

export const scheduleStore = new ScheduleStore();
