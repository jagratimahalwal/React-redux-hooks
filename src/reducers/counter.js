import * as ACTIONS from '../actions/actionTypes';

const initialState = 0;

const counter = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      console.log('INCREMENT');
      return state + 1;
    case ACTIONS.DECREMENT:
      console.log('DECREMENT');
      return state - 1;
    default:
      return state;
  }
};

export default counter;
