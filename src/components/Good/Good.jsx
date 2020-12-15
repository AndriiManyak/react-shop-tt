/* eslint-disable no-unused-vars */
import React from 'react';

import './Good.scss';

export const Good = () => {
  const a = 10;

  return (
    <div className="Good">
      <img
        src="../../images/shampoo.png"
        alt="shop"
      />
      <h3>Шапунь</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Repellat, architecto exercitationem, in nesciunt est,
        cupiditate necessitatibus totam
        reiciendis ea reprehenderit nostrum labore adipisci quaerat.
        Perferendis eveniet minus deleniti alias aut.
      </p>
      <div className="Good__purchase-configuration">
        <form>
          <div className="Good__purchase-wrapper">
            <select>
              <option>Цвет</option>
              <option>Желтий</option>
              <option>Синий</option>
            </select>
            <p>200 грн</p>
          </div>

          <div className="Good__size">
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
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
