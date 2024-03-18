// Action の定義
let nextTodoId = 0;

export const addTodo = (text) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text
})

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id
})

/* note
  Actionには必ず type が存在する
  ユーザーの操作で いずれかの Action を Dispatch し
  Reducer によって State が更新されます
*/
