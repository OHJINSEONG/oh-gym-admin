/* eslint-disable no-shadow */
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import config from '../../config';
import ChattingList from '../components/ChattingList';

const baseUrl = config.apiBaseUrl;

export default function ChattingListPage() {
  const { workerId } = useParams();

  const [chattingRooms, setChattingRooms] = useState([]);

  const stompClient = useRef({});

  useEffect(() => {
    const sockJs = new SockJS(`${baseUrl}/stomp/chat`);

    stompClient.current = Stomp.over(sockJs);

    stompClient.current.connect({ }, () => {
      stompClient.current.subscribe(`/sub/trainer/${workerId}/chattingRooms`, (chattingRooms) => {
        if (stompClient.current.connected) {
          setChattingRooms([]);
        }

        const chattingRoomList = JSON.parse(chattingRooms.body);

        // eslint-disable-next-line array-callback-return
        chattingRoomList.map((chattingRoom) => {
          setChattingRooms((chattingRooms) => [...chattingRooms, chattingRoom]);
        });
      });

      stompClient.current.subscribe(`/sub/trainer/${workerId}`, () => {
        stompClient.current.send(
          '/pub/trainer/chatList/enter',
          {},
          JSON.stringify({ trainerId: workerId }),
        );
      });

      stompClient.current.send(
        '/pub/trainer/chatList/enter',
        {},
        JSON.stringify({ trainerId: workerId }),
      );
    });

    return () => {
      if (stompClient.current.connected) {
        stompClient.current.disconnect(() => {
          stompClient.current.connected = false;
        });
      }
    };
  }, []);

  return (
    <ChattingList chattingRooms={chattingRooms} />
  );
}
