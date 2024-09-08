import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('http://www.test.com/test', () => {
    return HttpResponse.json([
      {
        status: 200,
        message: 'Success',
        data: {
          pins: [
            {
              no: 1,
              img_url: 'https://example.com/images/pin1.jpg',
              link: 'https://example.com/article1',
            },
            {
              no: 2,
              img_url: 'https://example.com/images/pin2.jpg',
              link: 'https://example.com/article2',
            },
            {
              no: 3,
              img_url: 'https://example.com/images/pin3.jpg',
              link: null,
            },
          ],
        },
      },
    ]);
  }),
];
