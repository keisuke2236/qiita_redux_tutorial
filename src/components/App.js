// Reactのコンポーネントの大元
// 追加フォームとリストを表示する

// コンテナは Redux と Compornent をつなげるためのもの
import AddTodoContainer from '../containers/AddTodoContainer'
import TodoListContainer from '../containers/TodoListContainer'

function App() {
  return (
    <div>
      <AddTodoContainer />
      <TodoListContainer />
    </div>
  );
}

export default App;
