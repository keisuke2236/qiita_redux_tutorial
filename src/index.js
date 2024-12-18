// ルートファイル
// アプリのステータスを管理する store を作成
// store を 全体に渡すために Provider を使う

import React, { Profiler } from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux'; // 普通に React で使う変数共有用の Provider

// Redux関係の import
import { combineReducers, createStore } from 'redux'; // redux が提供している createStore で store を作れる（Reactは関係がない）
import todoReducer from './reducers/todoReducer'; // todoのステートを内部で管理する リデューサー
import indexReducer from './reducers/indexReducer';
import textReducer from './reducers/textReducer';
import profileReducer from './reducers/profileReducer';

// combineReducerで複数の reducer を結合して store を作成する
// 複数の状態を管理したい場合は1個のルートリデューサーを作成して、それを createStore に渡す
// どんなアクションでも全てのリデューサーに渡される、そのため、全てのリデューサーが全てのアクションに反応する
const rootReducer = combineReducers({
  todos: todoReducer,
  index: indexReducer,
  text: textReducer,
  profile: profileReducer
})

// createStoreでストアを作成、引数にリデューサーを渡すと、ストア内に各リデューサーが管理する部分ステートが形成される
// 2個のリデューサーがあれば、ストア内に2つの部分ステートが形成される。 ストア state = { todos: [], hoges: [] } のようなイメージ
// createStore すると、全アプリケーションの状態を保持するストアが作成される
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// ここで Provider で全体に store を渡しているのだが、storeを利用するのは connect() である
// どのコンポーネントからでも、connect関数を用いてReduxの状態にアクセスしたり、アクションをディスパッチしたりすることが可能になってる
// storeは予約語で、Reduxが自動的に Provider から store を参照して利用している
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
