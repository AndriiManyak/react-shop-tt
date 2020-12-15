import { createStore, cobmineReducers } from 'redux';
import goodsReducer from './goods';

export function getGoods(state) {
  return state.goodsState.goods;
}

const reducer = cobmineReducers({
  goodsState: goodsReducer,
});

const store = createStore(reducer);

export default store;
