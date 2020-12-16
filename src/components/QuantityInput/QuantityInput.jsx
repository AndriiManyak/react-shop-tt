/* eslint-disable react/prop-types */
import React from 'react';

import './QuantityInput.scss';

export const QuantityInput = ({
  decreaseQuantity,
  increaseQuantity,
  quantity,
}) => (
  <div className="QuantityInput">
    <button
      className="QuantityInput__button"
      type="button"
      onClick={decreaseQuantity}
    >
      -
    </button>

    <span
      className="QuantityInput__quantity"
    >
      {quantity}
    </span>

    <button
      className="QuantityInput__button"
      type="button"
      onClick={increaseQuantity}
    >
      +
    </button>
  </div>
);
