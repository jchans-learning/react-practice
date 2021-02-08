function HelloWorldList(props) {
  const { names } = props

  return (
    <>
      {names}
      <ul>
        {names.map((name, index) => {
          return (
            <li key={index} style={{ color: '#ff6600', fontSize: 20 }}>
              {name}, 你好
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default HelloWorldList
