import React from 'react';
import { useSelector } from 'react-redux';
import { Good } from '../Good';
import { getGoods } from '../../store';

import './GoodList.scss';

export const GoodList = () => {
  const goods = useSelector(getGoods);

  return (
    <div className="GoodList">
      {goods.map(good => (
        <Good
          key={good.id}
          {...good}
        />
      ))}

    </div>
  );
};
