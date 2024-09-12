import { http, HttpResponse } from 'msw';

interface Pin {
  no: number;
  img_url: string;
  link: string | null;
}

interface DataResponse {
  pins: Pin[];
}

interface ApiResponse {
  status: number;
  message: string;
  data: DataResponse;
}

const PinDatas: ApiResponse = {
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
};

export const handlers = [
  http.get('/pins/random/v1', () => {
    console.log('MSW handler called for /pins/random/v1');
    return HttpResponse.json(PinDatas, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }),
];
