import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import { deleteTodo } from '../actions'
import TodoList from '../components/TodoList'

// 「todos」という名前で state をコンポーネントに渡します。
// state（todos）と Dispatch（toggleTodo） を TodoList コンポーネントに渡しています。
const mapStateToProps = state => ({ todos: state })
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
