/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Good } from '../Good';

import { goods as goodsToPurchase } from '../../api';

export const GoodList = () => {
  const [goods, setGoods] = useState([]);

  useEffect(() => {
    setGoods(goodsToPurchase);

    console.log(goodsToPurchase);
  }, []);

  return (
    <div>
      {goods.map(good => (
        <Good
          key={good.id}
          good={good}
        />
      ))}

    </div>
  );
};
