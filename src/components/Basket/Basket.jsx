import React from 'react';
import { useSelector } from 'react-redux';
import { getBasket } from '../../store';
import { BasketGood } from '../BasketGood';

import './Basket.scss';

export const Basket = () => {
  const goodsInBasket = useSelector(getBasket);

  return (
    <div className="Basket">
      <h2>Корзина</h2>

      <div className="Basket__list">
        {
          goodsInBasket.map(basketGood => (
            <BasketGood
              key={basketGood.id}
              {...basketGood}
            />
          ))
        }
      </div>
    </div>
  );
};
