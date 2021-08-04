import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../actions/actions';

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.counter);

  const handleInc = () => {
    dispatch(increment());
  };

  const handleDec = () => {
    dispatch(decrement());
  };

  return (
    <React.Fragment>
      <h2>
        {'\u2728'}
        {'\u2728'} React Redux Counter Example{'\u2728'}
        {'\u2728'}
        <button onClick={handleInc}>INCREMENT</button>
        <button onClick={handleDec}>DECREMENT</button>
        {JSON.stringify(state)}
      </h2>
    </React.Fragment>
  );
};

export default Home;
