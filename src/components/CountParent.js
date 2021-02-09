import { useState } from 'react'
import CountFuncWithParent from './CountFuncWithParent'

function Parent() {
  const [initNumber, setInitNumber] = useState(0)

  return (
    <>
      <CountFuncWithParent initNumber={initNumber} />
      <button
        onClick={() => {
          setInitNumber(10)
        }}
      >
        Set Initial Number as 10.
      </button>
      <button
        onClick={() => {
          setInitNumber(100)
        }}
      >
        Set Initial Number as 100
      </button>
    </>
  )
}

export default Parent
