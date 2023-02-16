import { apiService } from '../services/ApiService';
import Store from './Store';

export default class DiaryStore extends Store {
  constructor() {
    super();
    this.diarys = [];
    this.diary = {};
  }

  async fetchUserDiarys(userId) {
    const diarys = await apiService.fetchDiarys(userId);

    this.diarys = diarys;

    this.publish();
  }
}

export const diaryStore = new DiaryStore();
