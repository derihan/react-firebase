import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker'

console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

serviceWorker.register()