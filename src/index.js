import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux'; // redux が提供している createStore で store を作れる（Reactは関係がない）
import { Provider } from 'react-redux'; // 普通に React で使う変数共有用の Provider
import todoReducer from './reducers'; // todoのステートを内部で管理する リデューサー

const store = createStore(
  todoReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
