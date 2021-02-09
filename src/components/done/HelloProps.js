// 透過 props 傳入參數得到父母元件傳來的屬性值
function HelloProps(props) {
  return (
    <h1>
      {props.name}, {props.text}
    </h1>
  )
}

export default HelloProps
