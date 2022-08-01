import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import OrderStore from './store/OrderStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
      order: new OrderStore()
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById('root')
);