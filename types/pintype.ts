// 핀 하나의 타입 정의
export interface Pin {
  no: number;
  img_url: string;
  link: string | null;
}

export interface PinsResponse {
  status: number;
  message: string;
  data: {
    pins: Pin[];
  };
}
