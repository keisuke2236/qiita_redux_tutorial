import PropTypes from 'prop-types'

// completed が True だった場合、取り消し線を適用します。
const TodoText = ({ onClick, completed, text }) => (
  <span onClick={onClick} style={{ textDecoration: completed ? 'line-through' : 'none', marginRight: '10px' }}>
    {text}
  </span >
)

TodoText.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoText
