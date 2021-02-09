function Child2(props) {
  const innerData = '子女元件內部資料 waaaaaaaaaa'

  return (
    <button
      onClick={() => {
        props.setData(innerData)
      }}
    >
      送資料給父母元件
    </button>
  )
}

export default Child2
