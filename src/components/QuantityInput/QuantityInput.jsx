import React from 'react';
import PropTypes from 'prop-types';

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

QuantityInput.propTypes = {
  decreaseQuantity: PropTypes.func.isRequired,
  increaseQuantity: PropTypes.func.isRequired,
  quantity: PropTypes.number.isRequired,
};
