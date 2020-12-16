/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';
import { QuantityInput } from '../QuantityInput';

import './BasketGood.scss';

export const BasketGood = ({
  title,
  color,
  size,
  quantity,
  price,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="BasketGood">
      <img
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
    </div>
  );
};
