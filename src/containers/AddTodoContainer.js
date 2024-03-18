// 追加フォーム
// connect()関数を通じてReduxのディスパッチをpropsとして受け取る
// これをコンテナコンポーネントと呼ぶ

import React from "react"
import { connect } from "react-redux"
import { addTodo } from "../actions/todoActions"
import { changeText } from "../actions/textActions"

// stateをシンプルな props に書き換える
const mapStateToProps = state => ({
  index: state.index,
  text: state.text
})

const mapDispatchToProps = dispatch => ({
  addTodo: (text, index) => dispatch(addTodo(text, index)),
  changeText: text => dispatch(changeText(text))
})


const AddTodo = ({ index, text, addTodo, changeText }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        addTodo(text, index)
      }}>
        <input value={text} onChange={(e) => changeText(e.target.value)} />
        <button type="submit">追加</button>
      </form>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)
