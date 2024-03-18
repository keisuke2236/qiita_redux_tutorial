// リデューサー、状態（ステート）の管理者
// store の中に存在して、リデューサー毎にステート（状態データ）を持っている
// Action毎にその ステート を更新する処理も持つ

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case 'DELETE_TODO':
      return state.filter(todo => todo.id !== action.id)
    default:
      return state;
  }
}

export default todosReducer

/* note
  state を action で更新する
  いつものスプレット構文がある、馴染み深い。
*/
