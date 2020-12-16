import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  image,
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
        alt="shampoo"
        src={`images/${image}`}
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
        className="BasketGood__delete-button"
        type="button"
        onClick={() => deleteFromBasket(id)}
      >
        <i className="fa fa-trash" />
      </button>
    </div>
  );
};

BasketGood.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};
