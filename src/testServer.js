import { setupServer } from 'msw/node';

import config from '../config';

const { rest } = require('msw');

const baseUrl = config.apiBaseUrl;

const server = setupServer(
  rest.get(`${baseUrl}/products`, async (req, res, ctx) => res(
    ctx.json({
      productDtos: [{
        id: 1, title: '헬스장 이용권', price: 180000,
      },
      {
        id: 2, title: '피티', price: 360000,
      }],
    }),
  )),

  rest.post(`${baseUrl}/products`, async (req, res, ctx) => {
    const { title } = await req.json();

    return res(
      ctx.json({
        id: 1,
        title,
      }),
    );
  }),

  rest.get(`${baseUrl}/requests/:trainerId`, async (req, res, ctx) => {
    const { trainerId } = await req.params;

    if (trainerId === '1') {
      return res(
        ctx.json([
          {
            id: 1, receiverId: 1, context: '2022-12-08T09:00', senderId: 1, message: '오진욱님 2022년 12월 14일 10시에 피트 등록 요청.', status: 'CREATED',
          },
          {
            id: 2, receiverId: 1, context: '2022-12-08T11:00', senderId: 1, message: '오진욱님 2022년 12월 16일 10시에 피트 등록 요청.', status: 'CHECKED',
          },
          {
            id: 3, receiverId: 1, context: '2022-12-10T11:00', senderId: 1, message: '오진욱님 2022년 12월 18일 10시에 피트 등록 요청.', status: 'DELETED',
          },
        ]),
      );
    }

    return res(
      ctx.json({}),
    );
  }),

  rest.patch(`${baseUrl}/requests`, async (req, res, ctx) => {
    const { trainerId } = await req.url.searchParams.get('userId');

    if (trainerId === '1') {
      return res(
        ctx.status(204),
      );
    }

    return res(
      ctx.status(400),
    );
  }),

  rest.delete(`${baseUrl}/requests/:requestId`, async (req, res, ctx) => {
    const { requestId } = await req.params('requestId');

    if (requestId === 1) {
      return res(
        ctx.status(204),
      );
    }

    return res(
      ctx.status(400),
    );
  }),

  rest.post(`${baseUrl}/lectures`, async (req, res, ctx) => {
    const { trainerId, consumerId, date } = await req.json();

    return res(
      ctx.json({
        trainerId,
        consumerId,
        date,
      }),
    );
  }),

  rest.get(`${baseUrl}/lectures/:trainerId`, async (req, res, ctx) => {
    const { trainerId } = await req.params;

    if (trainerId === '1') {
      return res(
        ctx.json(
          [
            {
              id: 1, userName: '오진성', status: 'CREATED', date: '2022-12-25', time: '11:00',
            },
            {
              id: 2, userName: '오진성', status: 'DELETED', date: '2022-12-27', time: '11:00',
            },
            {
              id: 3, userName: '오진성', status: 'CREATED', date: '2022-12-29', time: '11:00',
            },
          ],
        ),
      );
    }

    return res(
      ctx.status(400),
    );
  }),

  rest.post(`${baseUrl}/works`, async (req, res, ctx) => {
    const { date } = await req.json();

    return res(
      ctx.json([
        {
          id: 1, status: 'CREATED', date,
        },
        {
          id: 2, status: 'CREATED', date,
        },
        {
          id: 3, status: 'CREATED', date,
        },
      ]),
    );
  }),

  rest.get(`${baseUrl}/works/:trainerId`, async (req, res, ctx) => {
    const { trainerId } = await req.params;

    if (trainerId === '1') {
      return res(
        ctx.json([
          {
            id: 1, date: '2022-12-12', startTime: '11:00', endTime: '12:00',
          },
          {
            id: 2, date: '2022-12-13', startTime: '11:00', endTime: '12:00',
          },
          {
            id: 3, date: '2022-12-14', startTime: '11:00', endTime: '12:00',
          },
          {
            id: 4, date: '2022-12-15', startTime: '11:00', endTime: '12:00',
          },
        ]),
      );
    }

    return res(
      ctx.status(400),
    );
  }),
);

export default server;
