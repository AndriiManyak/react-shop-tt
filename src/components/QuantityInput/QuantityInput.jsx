/* eslint-disable react/prop-types */
import React from 'react';

export const QuantityInput = ({
  decreaseQuantity,
  increaseQuantity,
  quantity,
}) => (
  <div className="QuantityInput">
    <button
      type="button"
      onClick={decreaseQuantity}
    >
      -
    </button>

    <span>{quantity}</span>

    <button
      type="button"
      onClick={increaseQuantity}
    >
      +
    </button>
  </div>
);
