'use client';

import axios from 'axios';

const PinBoard = () => {
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
