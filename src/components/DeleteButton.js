import PropTypes from 'prop-types'

const DeleteButton = ({ onClick }) => (
  <button onClick={onClick}>削除</button>
)

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default DeleteButton
