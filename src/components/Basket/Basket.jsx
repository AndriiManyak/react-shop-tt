import React from 'react';
import { useSelector } from 'react-redux';
import { getBasket } from '../../store';

export const Basket = () => {
  const goodsInBasket = useSelector(getBasket);

  return (
    <div>
      <h1>AAAA</h1>
      <p>{goodsInBasket}</p>
    </div>
  );
};
