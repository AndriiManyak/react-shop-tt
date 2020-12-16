/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
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
      <p>{size}</p>

      <div>
        <QuantityInput
          quantity={quantity}
        />
      </div>

      <p>{`${price * quantity * size / 100} грн`}</p>

      <button
        type="button"
        onClick={() => deleteFromBasket(id)}
      >
        Delete
      </button>
    </div>
  );
};
