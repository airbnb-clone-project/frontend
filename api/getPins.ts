import axios from 'axios';

import { PinsResponse } from '@/types/pintype';

export const getPins = async (): Promise<PinsResponse> => {
  const pinDatas = await axios.get('/postman/api/pins/random/v1');

  return pinDatas.data;
};
