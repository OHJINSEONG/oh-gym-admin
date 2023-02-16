import { apiService } from '../services/ApiService';
import Store from './Store';

export default class MemeberManageStore extends Store {
  constructor() {
    super();
    this.members = [];
    this.member = {};
  }

  async fetchMembers() {
    const members = await apiService.fetchMembers();

    this.members = members;

    this.publish();
  }

  async find(memberId) {
    const member = await apiService.findMember(memberId);

    this.member = member;

    this.publish();
  }
}

export const memberManageStore = new MemeberManageStore();
