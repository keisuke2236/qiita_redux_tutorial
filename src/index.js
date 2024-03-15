import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// redux が提供している createStore で store を作れる（Reactは関係がない）
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// 自作した todoのステート を管理している reducer
import todoReducer from './reducers';

// todoReducer が管理する store が作成され、todo の state（状態）を管理できるようになる
// そもそも Reducer は state を管理するものなので、その認識があれば以下の直訳通り読んで理解ができる
// 直訳「ストアを作ります、TodoRecucerが管理します」
const store = createStore(todoReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


/* note 
  複数の Reducer を使う場合は、combineReducers を使う
    import { createStore, combineReducers } from 'redux';
    import todosReducer from './reducers/todos';
    import visibilityFilterReducer from './reducers/visibilityFilter';

    const rootReducer = combineReducers({
      todos: todosReducer,
      visibilityFilter: visibilityFilterReducer
    });

    const store = createStore(rootReducer);
*/
