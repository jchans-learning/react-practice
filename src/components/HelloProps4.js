import PropTypes from 'prop-types'

// 透過 props 傳入參數得到父母元件傳來的屬性值
function HelloProps4(props) {
  // 解構賦值
  const { name, text, clickMethod } = props

  return (
    <h1 onClick={clickMethod}>
      {name}, {text}
    </h1>
  )
}

// 預設屬性值
HelloProps4.defaultProps = {
  name: 'Bob',
  text: 'Hello',
}

// 檢查 props 的類型
HelloProps4.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickMethod: PropTypes.func,
}

export default HelloProps4
