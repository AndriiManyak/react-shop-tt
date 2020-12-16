/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/backet';
import { QuantityInput } from '../QuantityInput';

import './BasketGood.scss';

export const BasketGood = ({
  title,
  color,
  size,
  quantity,
  price,
  id,
}) => {
  const dispatch = useDispatch();
  const [goodsQuanity, setGoodsQuantity] = useState(quantity);

  const increaseQuantity = () => {
    setGoodsQuantity(goodsQuanity + 1);
  };

  const decreaseQuantity = () => {
    if (Number(goodsQuanity) === 1) {
      return;
    }

    setGoodsQuantity(goodsQuanity - 1);
  };

  const deleteFromBasket = (goodId) => {
    dispatch(actions.delete(goodId));
  };

  return (
    <div className="BasketGood">
      <img
        className="BasketGood__image"
        alt="store"
        src=""
      />
      <p>{title}</p>
      <p>{color}</p>
      <p>{`${size} мл`}</p>

      <div>
        <QuantityInput
          decreaseQuantity={decreaseQuantity}
          increaseQuantity={increaseQuantity}
          quantity={goodsQuanity}
        />
      </div>

      <p>{`${price * goodsQuanity * size / 100} грн`}</p>

      <button
        type="button"
        onClick={() => deleteFromBasket(id)}
      >
        Delete
      </button>
    </div>
  );
};
