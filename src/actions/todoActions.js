// Action の定義
// Action を起こすために必要な変数を受け渡す票の作成
// Actionといいつつ、ただの関数を返しているだけ

// action の reducer も 純粋関数であるべき
// let nextTodoId = 0;

// 例えば、nextTodoIdは引数で次のIDを受け取るようにする
export const addTodo = (text, id) => ({
  type: 'ADD_TODO',
  id: id,
  text: text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id: id
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id: id
})

/* note
  Actionには必ず type が存在する
  ユーザーの操作で いずれかの Action を Dispatch し
  Reducer によって State が更新されます
*/
