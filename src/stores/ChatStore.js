/* eslint-disable class-methods-use-this */
/* eslint-disable no-nested-ternary */
import { dateFormatter } from '../utils/DateFormatter';
import Store from './Store';

export default class ChatStore extends Store {
  constructor() {
    super();
    this.chats = [];
  }

  async setChats(chatmassages, userName) {
    this.chats = await chatmassages
      .map((chatmassage) => (chatmassage.writer === userName
        ? { ...chatmassage, user: 'myChat' }
        : { ...chatmassage, user: 'otherChat' }))
      .map((chat, index) => (index === chatmassages.length - 1
        ? { ...chat, time: this.setKoTime(chat.time) }
        : this.compareTime(chatmassages[index + 1].time, chat.time)
          && chatmassages[index + 1].writer === chat.writer
          ? { ...chat, time: '' }
          : { ...chat, time: this.setKoTime(chat.time) }
      ))
      .map((chatmassage, index) => (index === 0
        ? chatmassage
        : chatmassages[index - 1].writer === chatmassage.writer
          ? { ...chatmassage, writer: '' }
          : chatmassage
      ));

    this.publish();
  }

  async setTimes(chats) {
    this.chats = chats;
  }

  compareTime(time1, time2) {
    return dateFormatter.localDateTime(time1) === dateFormatter.localDateTime(time2);
  }

  setKoTime(time) {
    return dateFormatter.localTime(time);
  }
}

export const chatStore = new ChatStore();
