/* eslint-disable no-shadow */
import { useEffect, useRef, useState } from 'react';

import SockJs from 'sockjs-client';

import Stomp from 'stompjs';

import { useLocation } from 'react-router-dom';

import { useLocalStorage } from 'usehooks-ts';

import config from '../../config';

import Chatting from '../components/Chatting';

const baseUrl = config.apiBaseUrl;

export default function ChattingPage() {
  const location = useLocation();

  const { worker } = location.state;

  const nickname = worker.name;

  const path = location.pathname;

  const roomId = Number(path.split('chats/')[1]);

  const [message, setMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  const stompClient = useRef({});

  useEffect(() => {
    const sockJs = new SockJs(`${baseUrl}/stomp/chat`);

    stompClient.current = Stomp.over(sockJs);

    stompClient.current.connect({ }, () => {
      stompClient.current.subscribe(`/sub/chats/room/${roomId}`, (chats) => {
        if (stompClient.current.connected) {
          setChatMessages([]);
        }

        const chatList = JSON.parse(chats.body);

        // eslint-disable-next-line array-callback-return
        chatList.map((chat) => {
          const {
            id, status, time, message, writer,
          } = chat;

          setChatMessages((chatMessages) => [...chatMessages, {
            id, status, time, message, writer,
          }]);
        });
      });

      stompClient.current.subscribe(`/sub/chat/room/${roomId}`, (chat) => {
        const {
          id, status, time, message, writer,
        } = JSON.parse(chat.body);

        setChatMessages((chatMessages) => [...chatMessages, {
          id, status, time, message, writer,
        }]);
      });

      stompClient.current.send(
        '/pub/trainer/chat/messages',
        {},
        JSON.stringify({ roomId, trainerId: worker.id }),
      );
    });

    return () => {
      stompClient.current.send(
        '/pub/trainer/chat/messages',
        {},
        JSON.stringify({ roomId, trainerId: worker.id }),
      );

      if (stompClient.current.connected) {
        stompClient.current.disconnect(() => {
          stompClient.current.connected = false;
        });
      }
    };
  }, []);

  const publish = (message) => {
    if (!stompClient.current.connected) {
      return;
    }
    stompClient.current.send(
      '/pub/trainer/chat/message',
      { },
      JSON.stringify({
        roomId,
        writer: worker.name,
        message,
        trainerId: worker.id,
      }),
    );

    stompClient.current.send(
      '/pub/chat/transfer',
      { },
      JSON.stringify({
        roomId,
      }),
    );
    setMessage('');
  };

  const publishMessage = (message) => {
    publish(message);
  };

  const messageChange = (value) => {
    setMessage(value);
  };

  return (
    <Chatting
      worker={worker}
      message={message}
      messageChange={messageChange}
      chatMessages={chatMessages}
      publishMessage={publishMessage}
      nickname={nickname}
    />
  );
}
