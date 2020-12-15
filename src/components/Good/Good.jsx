/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import './Good.scss';

export const Good = ({ good }) => {
  const [purchase, setPurchase] = useState({
    id: good.id,
    color: good.colors[0],
    size: good.sizes[0],
    quantity: 1,
  });

  useEffect(() => {
    // console.log(good);
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPurchase(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(purchase);
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
      <img
        src="/../images/shampoo.png"
        alt="shop"
      />
      <h2>{good.title}</h2>
      <p>
        {good.description}
      </p>
      <div className="Good__purchase-configuration">
        <form onSubmit={handleSubmit}>
          <div className="Good__purchase-wrapper">
            <select
              name="color"
              value={purchase.color}
              onChange={handleChange}
            >
              {good.colors.map(color => (
                <option
                  key={color}
                  value={color}
                >
                  {color}
                </option>
              ))}
            </select>
            <p>
              {`${good.price * purchase.quantity * purchase.size / 100} грн`}
            </p>
          </div>

          <div className="Good__size">
            {
              good.sizes.map(size => (
                <label key={size}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={size === purchase.size}
                    onChange={handleChange}
                  />
                  {`${size} мл`}
                </label>
              ))
            }
          </div>

          <div className="Good__bottom">
            <div className="Good__quantity">
              <button
                type="button"
                onClick={decreaseQuantity}
              >
                -
              </button>

              <input
                type="number"
                name="quantity"
                value={purchase.quantity}
                onChange={handleChange}
              />

              <button
                type="button"
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>

            <button
              className="Good__purchase"
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
