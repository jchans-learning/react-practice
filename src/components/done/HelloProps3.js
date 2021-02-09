// 透過 props 傳入參數得到父母元件傳來的屬性值
function HelloProps3(props) {
  // 解構賦值
  const { name, text } = props

  return (
    <h1>
      {name}, {text}
    </h1>
  )
}

// 預設屬性值
HelloProps3.defaultProps = {
  name: 'Bob',
  text: 'Hello',
}

export default HelloProps3
