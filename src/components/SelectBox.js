import React, { useState } from 'react'

function SelectBox() {
  const [text, setText] = useState('')
  const handleChange = (e) => {
    const newText = e.target.value
    setText(newText)
    console.log(newText)
  }

  return (
    <>
      <>
        <select onChange={handleChange} value={text}>
          <option value="JavaScript" key={1}>
            JavaScript
          </option>
          <option value="Angular2" key={2}>
            Angular2
          </option>
          <option value="React" key={3}>
            React
          </option>
          <h1>{text}</h1>
        </select>
      </>
    </>
  )
}

export default SelectBox
