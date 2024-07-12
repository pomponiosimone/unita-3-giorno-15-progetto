import { createStore } from 'redux';

const initialState = {
  rock: [],
  pop: [],
  hiphop: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MUSIC':
      return { ...state, [action.genre]: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;