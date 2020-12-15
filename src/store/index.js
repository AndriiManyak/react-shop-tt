import { createStore, combineReducers } from 'redux';
import goodsReducer from './goods';

export function getGoods(state) {
  return state.goodsState.goods;
}

const reducer = combineReducers({
  goodsState: goodsReducer,
});

const store = createStore(reducer);

export default store;
