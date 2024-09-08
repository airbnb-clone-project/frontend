'use client';

import axios from 'axios';
import { useEffect } from 'react';

const PinBoard = () => {
  useEffect(() => {
    const dataFetch = async () => {
      const data = await axios.get('http://www.test.com/test');
      console.log(data);
    };

    dataFetch();
  }, []);
  return <div>PinBoard</div>;
};

export default PinBoard;
