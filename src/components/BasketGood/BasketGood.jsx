/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch } from 'react-redux';

import './BasketGood.scss';

export const BasketGood = ({ basketGood }) => {
  const dispatch = useDispatch();

  return (
    <div className="BasketGood">
      <img
        alt="store"
        src=""
      />
      <p>{basketGood.title}</p>
      <p>{basketGood.color}</p>
      <p>{basketGood.size}</p>
    </div>
  );
};
