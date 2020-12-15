import initialState from './initialState';

const SAVE = 'goods/SAVE';

export const actions = {
  save: goods => ({
    type: SAVE,
    goods,
  }),
};

const goodsReducer = (state = initialState, action) => {
  if (action.type === SAVE) {
    return {
      ...state,
      goods: [...action.users],
    };
  }

  return state;
};

export default goodsReducer;
