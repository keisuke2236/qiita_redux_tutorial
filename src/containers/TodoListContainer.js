// TODOリスト（このファイルは表示はしない、Reduxと繋げてるだけ）
// 実際に表示するのは src/components/TodoList.js で
// connect をすることで、dispatch と state を受け取れるようになる
import { connect } from 'react-redux'
// アクション読み込み
import { toggleTodo } from '../actions/todoActions'
import { deleteTodo } from '../actions/todoActions'

import TodoList from '../components/TodoList'

// 「todos」という名前で state をコンポーネントに渡します。
// redux ストアに接続しているので state や dispatch が使えます。
const mapStateToProps = state => ({
  todos_state: state.todos
})
const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: id => dispatch(deleteTodo(id))
})

// ReactのコンポーネントをReduxストアに「接続（connect）」する
// connect すると、dispatch と state を受け取れるようになる
const WrappedComponent = connect(mapStateToProps, mapDispatchToProps);
export default WrappedComponent(TodoList)

// 高階関数
// connect(mapStateToProps, mapDispatchToProps) の戻り値が関数でその引数が TodoList

// const WrappedComponent = (Component) => {
//   const todos_state = 'from state';
//   return (
//     <Component todos_state={todos_state} />
//   )
// }

/*
connect関数はreact-reduxライブラリが提供する関数
ReactのコンポーネントをReduxストアに「接続（connect）」する

1. ストアから必要な状態を抽出し、それをコンポーネントのpropsとして渡す
1. アクションをディスパッチする関数を生成し、それをコンポーネントのpropsとして渡す
1. ストアが更新されたときにコンポーネントを再レンダリングするように設定する

connect関数は通常、2つの引数を取ります。
これらの引数は関数で、いずれもオプショナルです。

1つ目の引数は mapStateToProps と呼ばれReduxストアの状態をReactコンポーネントのpropsにマップするための関数です。この関数はストアの状態を引数に取り、それから必要なデータを抽出してオブジェクトとして返します。このオブジェクトの各フィールドが結果的にコンポーネントのpropsとなります。
2つ目の引数は mapDispatchToProps と呼ばれ、ディスパッチ可能なアクションクリエーターをコンポーネントのpropsにマップするための関数です。ここで生成された各関数を呼び出すと、その結果（通常はアクションオブジェクト）がストアに対してディスパッチされます。

mapStateToPropsとmapDispatchToPropsを適切に定義し
それらをconnectに渡すことで、コンポーネントはストアの一部の状態をpropsとして受け取り
またアクションをディスパッチする関数もpropsとして受け取ることができます。

したがって、connect関数はReactコンポーネントとReduxストアとの接続を行い
ストアの状態へのアクセスや、状態の更新を可能にします。
*/
