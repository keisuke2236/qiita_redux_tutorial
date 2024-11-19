import React from "react"
import { connect } from "react-redux"
import { changeName, changeAge, changeEmail } from "../actions/profileActions"

const mapStateToProps = state => ({
  name: state.profile.name,
  age: state.profile.age,
  email: state.profile.email
})

const mapDispatchToProps = dispatch => ({
  changeName: name => dispatch(changeName(name)),
  changeAge: age => dispatch(changeAge(age)),
  changeEmail: email => dispatch(changeEmail(email))
})

const ProfileEditContainer = ({ name, age, email, changeName, changeAge, changeEmail }) => {
  return (
    <div>
      <label>名前</label>
      <input value={name} onChange={(e) => changeName(e.target.value)} />

      <label>年齢</label>
      <input type="number" value={age} onChange={e => changeAge(e.target.value)} />

      <label>メールアドレス</label>
      <input value={email} onChange={e => changeEmail(e.target.value)} />
    </div>
  )
}

// Redux の state と dispatch を コンポーネント側で利用できる様に接続
export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditContainer)
