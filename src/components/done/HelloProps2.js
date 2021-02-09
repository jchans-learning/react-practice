// 透過 props 傳入參數得到父母元件傳來的屬性值
function HelloProps(props) {
  // 解構賦值
  const { name, text } = props

  return (
    <h1>
      {name}, {text}
    </h1>
  )
}

export default HelloProps
