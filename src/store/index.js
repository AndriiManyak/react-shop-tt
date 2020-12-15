import { createStore, combineReducers } from 'redux';
import basketReducer from './backet';
import goodsReducer from './goods';

export function getGoods(state) {
  return state.goodsState.goods;
}

export function getBasket(state) {
  return state.basketState.basket;
}

const reducer = combineReducers({
  goodsState: goodsReducer,
  basketState: basketReducer,
});

const store = createStore(reducer);

export default store;
