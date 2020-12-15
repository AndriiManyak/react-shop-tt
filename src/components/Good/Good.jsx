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
  });

  useEffect(() => {
    console.log(good);
  }, []);

  return (
    <div className="Good">
      <img
        src="/../images/shampoo.png"
        alt="shop"
      />
      <h3>{good.title}</h3>
      <p>
        {good.description}
      </p>
      <div className="Good__purchase-configuration">
        <form>
          <div className="Good__purchase-wrapper">
            <select>
              <option>Цвет</option>
              <option>Желтий</option>
              <option>Синий</option>
            </select>
            <p>{`${good.price} грн`}</p>
          </div>

          <div className="Good__size">
            {
              good.sizes.map(size => (
                <label>
                  <input
                    type="radio"
                    name="size"
                    value={size}
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
              >
                -
              </button>
              1
              <button
                type="button"
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
