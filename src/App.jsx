import React from 'react';
import './App.scss';
import { GoodList } from './components/GoodList';
import { Basket } from './components/Basket';

export const App = () => (
  <div className="App">
    <GoodList />
    <Basket />
  </div>
);
