import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/backet';
import { QuantityInput } from '../QuantityInput';

import comparisson from '../../images/comparisson.svg';
import comparissonCheck from '../../images/comparisson-check.png';

import './Good.scss';

export const Good = ({
  title,
  description,
  colors,
  sizes,
  price,
  image,
  isNew,
}) => {
  const dispatch = useDispatch();
  const [compare, setCompare] = useState(false);
  const [purchase, setPurchase] = useState({
    title,
    price,
    image,
    color: colors[0],
    size: sizes[0],
    quantity: 1,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPurchase(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(actions.add({
      ...purchase,
      id: Date.now(),
    }));
  };

  const changeCompare = () => {
    setCompare(prevState => !prevState);
  };

  const increaseQuantity = () => {
    setPurchase(prevState => ({
      ...prevState,
      quantity: Number(prevState.quantity) + 1,
    }));
  };

  const decreaseQuantity = () => {
    if (Number(purchase.quantity) === 1) {
      return;
    }

    setPurchase(prevState => ({
      ...prevState,
      quantity: Number(prevState.quantity) - 1,
    }));
  };

  return (
    <div className="Good">
      {
        isNew && (
          <div className="Good__new-tag">NEW</div>
        )
      }
      <button
        className="Good__comparisson"
        type="button"
        onClick={changeCompare}
      >
        <img
          className="Good__comparisson-image"
          src={compare ? comparissonCheck : comparisson}
          alt="comparisson"
        />
      </button>
      <div className="Good__image-wrapper">
        <img
          className="Good__image"
          src={`../../images/${image}`}
          alt="shampoo"
        />
      </div>

      <h2 className="Good__title">
        {title}
      </h2>

      <p className="Good__description">
        {description}
      </p>

      <div className="Good__purchase-configuration">
        <form onSubmit={handleSubmit}>
          <div className="Good__purchase-wrapper">
            <select
              name="color"
              value={purchase.color}
              onChange={handleChange}
            >
              {colors.map(color => (
                <option
                  key={color}
                  value={color}
                >
                  {color}
                </option>
              ))}
            </select>
            <p>
              {`${price * purchase.quantity * purchase.size / 100} грн`}
            </p>
          </div>

          <div className="Good__size">
            {
              sizes.map(size => (
                <label
                  className="Good__radio-select"
                  key={size}
                >
                  <input
                    className="Good__radiobutton"
                    type="radio"
                    name="size"
                    value={size}
                    checked={size === purchase.size}
                    onChange={handleChange}
                  />
                  <span className="Good__checkmark" />
                  {`${size} мл`}
                </label>
              ))
            }
          </div>

          <div className="Good__bottom">
            <QuantityInput
              decreaseQuantity={decreaseQuantity}
              increaseQuantity={increaseQuantity}
              quantity={purchase.quantity}
            />

            <button
              className="Good__purchase-button"
              type="submit"
            >
              Купить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

Good.propTypes = {
  title: PropTypes.string.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isNew: PropTypes.bool.isRequired,
};
