import { apiService } from '../services/ApiService';
import Store from './Store';

export default class ChattingRoomStore extends Store {
  constructor() {
    super();
    this.chattingRooms = [];
  }

  async fetchChattingRooms(trainerId) {
    const chattingRooms = await apiService.fetchChattingRooms(trainerId);

    this.chattingRooms = chattingRooms;

    this.publish();
  }
}

export const chattingRoomStore = new ChattingRoomStore();
