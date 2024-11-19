// Reactのコンポーネントの大元
// 追加フォームとリストを表示する

// コンテナは Redux と Compornent をつなげるためのもの
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'
import ProfileEditContainer from '../containers/ProfileEditContainer'
import React from 'react';

function App() {
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
      <ProfileEditContainer />
    </div>
  );
}

export default App;
