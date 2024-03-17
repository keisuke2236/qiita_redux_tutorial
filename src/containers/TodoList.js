import { connect } from 'react-redux'
import { toggleTodo } from '../actions'

// stateとdispatchメソッドを渡す先であるコンポーネントをimportします。
import TodoList from '../components/TodoList'

// 「todos」という名前で state をコンポーネントに渡します。
const mapStateToProps = state => ({
  todos: state
})

// これは、Dispatchメソッドをコンポーネントに渡すための準備です。
// 定義した Action toggleTodo を渡します。
// この関数は、Todo の id のみの情報を必要としています。
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

// 上で定義した state（todos）と Dispatch（toggleTodo） を TodoList コンポーネントに渡しています。
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
