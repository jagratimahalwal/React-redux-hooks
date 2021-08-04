import React from 'react';
import { Provider } from 'react-redux';
import './style.css';
import store from './store';
import Home from './components/Home';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Home />
      </div>
    </Provider>
  );
}
