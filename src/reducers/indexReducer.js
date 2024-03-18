// 純粋関数であれば、reducer は state を自由に操作しても問題ない
// initial state と同じ型を返すこと

const indexReducer = (state = 3, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return state + 1
    default:
      return state;
  }
}

export default indexReducer
