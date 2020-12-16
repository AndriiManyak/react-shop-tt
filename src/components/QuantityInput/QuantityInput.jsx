/* eslint-disable react/prop-types */
import React from 'react';

export const QuantityInput = ({
  decreaseQuantity,
  increaseQuantity,
  handleChange,
  quantity,
}) => (
  <div className="QuantityInput">
    <button
      type="button"
      onClick={decreaseQuantity}
    >
      -
    </button>

    <input
      type="number"
      name="quantity"
      value={quantity}
      onChange={handleChange}
    />

    <button
      type="button"
      onClick={increaseQuantity}
    >
      +
    </button>
  </div>
);
