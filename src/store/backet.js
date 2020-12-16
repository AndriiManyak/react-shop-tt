/* eslint-disable no-console */
import initialState from './initialState';

const ADD = 'basket/ADD';
const DELETE = 'basket/DELETE';

export const actions = {
  add: good => ({
    type: ADD,
    good,
  }),

  delete: goodId => ({
    type: DELETE,
    goodId,
  }),
};

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        basket: [...state.basket, action.good],
      };
    case DELETE:
      return {
        ...state,
        basket: state.basket.filter(good => good.id !== action.goodId),
      };
    default:
      return state;
  }
};

export default basketReducer;
