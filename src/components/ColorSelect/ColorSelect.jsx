/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './ColorSelect.scss';
import selectArrow from '../../images/arrow.svg';

export const ColorSelect = ({
  colors,
  selectedColor,
  selectColor,
}) => {
  const [isListVisible, setIsListVisible] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mouseover', (event) => {
      if (event.target.classList.contains('GoodList')) {
        setIsListVisible(false);
      }
    });
  }, []);

  const handleClickOutside = (event) => {
    const { target } = event;

    if (
      !target.classList.contains('ColorSelect')
      && !target.classList.contains('ColorSelect__list-header')
    ) {
      setIsListVisible(false);
    }
  };

  const changeListVisibility = () => {
    setIsListVisible(prevState => !prevState);
  };

  const handleOptionClick = (color) => {
    selectColor(color);
    changeListVisibility();
  };

  return (
    <div className="ColorSelect">
      <button
        className="ColorSelect__list-header"
        type="button"
        onClick={changeListVisibility}
      >
        <p className="ColorSelect__selected-color">{selectedColor}</p>
        <img
          className={
            classNames(
              'ColorSelect__select-arrow',
              { 'ColorSelect__select-arrow--active': isListVisible },
            )
          }
          alt="arrow"
          src={selectArrow}
        />
      </button>

      {
        isListVisible && (
          <div className="ColorSelect__list-wrapper">
            <ul className="ColorSelect__list">
              {colors.map(color => (
                <li key={color}>
                  <button
                    className="ColorSelect__list-item"
                    type="button"
                    onClick={() => handleOptionClick(color)}
                  >
                    {color}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )
      }
    </div>
  );
};

ColorSelect.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedColor: PropTypes.string.isRequired,
  selectColor: PropTypes.func.isRequired,
};
