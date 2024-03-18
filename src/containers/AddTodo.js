import React from "react"
// connect は dispatch を利用できるようにするためのもの
import { connect } from "react-redux"
import { addTodo } from "../actions"

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) { return } // null なら不実行
        dispatch(addTodo(input.value))
        input.value = '' // 投稿後にtextboxを空にする
      }}>
        <input ref={node => input = node} />
        <button type="submit">追加</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
