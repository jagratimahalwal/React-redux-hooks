import * as ACTIONS from './actionTypes';

export const increment = () => {
  return {
    type: ACTIONS.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: ACTIONS.DECREMENT
  };
};
