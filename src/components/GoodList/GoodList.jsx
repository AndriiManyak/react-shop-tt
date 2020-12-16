/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Good } from '../Good';
import { goods as goodsToPurchase } from '../../api';
import { getGoods } from '../../store';

import './GoodList.scss';

export const GoodList = () => {
  const goods = useSelector(getGoods);

  useEffect(() => {
    console.log(goodsToPurchase);
  }, []);

  return (
    <div className="GoodList">
      {goods.map(good => (
        <Good
          key={good.id}
          good={good}
        />
      ))}

    </div>
  );
};
