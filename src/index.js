import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import card from './Store/reducer';



const store = createStore(card)
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Provider store={store}>
             <App />
          </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


