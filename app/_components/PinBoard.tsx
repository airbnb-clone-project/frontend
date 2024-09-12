'use client';

import axios from 'axios';
import { useEffect } from 'react';

const PinBoard = () => {
  useEffect(() => {
    const dataFetch = async () => {
      try {
        setTimeout(async () => {
          try {
            const response = await axios.get('/pins/random/v1');
            console.log('Data:', response.data);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }, 1000); // 1000ms = 1초 지연
      } catch (error) {
        console.error('Error during dataFetch setup:', error);
      }
    };

    dataFetch();
  }, []);

  const onClick = async () => {
    const data = await axios.get('/pins/random/v1');

    console.log(data.data);
  };

  return (
    <div>
      <button onClick={onClick}>msw버튼</button>
    </div>
  );
};

export default PinBoard;
