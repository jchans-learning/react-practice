// Parent3,js
const innerData = 'ChildOne inner Data'

function ChildOne(props) {
  return (
    <button
      onClick={() => {
        props.setData(innerData)
      }}
    >
      Send Data to ChildTwo Component.
    </button>
  )
}

export default ChildOne
