// TodoList コンポーネント

import PropTypes from 'prop-types'
import TodoText from './TodoText.js'
import DeleteButton from './DeleteButton.js'

// connect() で redux に接続されたコンポーネント
// connect されると自動的に mapStateToProps, mapDispatchToProps が props に追加される
const TodoList = ({ todos_state, toggleTodo, deleteTodo }) => (
  <ul>
    {todos_state.map(todo =>
      <li key={todo.id}>
        <TodoText {...todo} onClick={() => toggleTodo(todo.id)} />
        <DeleteButton onClick={() => deleteTodo(todo.id)} />
      </li>
    )}
  </ul>
)

// ただの型定義
TodoList.propTypes = {
  todos_state: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList

/*
const TodoList = ({ todos_state, toggleTodo, deleteTodo })

connect()関数が、ストアとコンポーネントの接続を介して
指定したReduxの状態（mapStateToPropsで指定）や
アクションディスパッチメソッド（mapDispatchToPropsで指定）を
コンポーネントのpropsとして注入する
*/
