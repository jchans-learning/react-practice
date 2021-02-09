import { useState } from 'react'
import CountFuncWithParent2 from './CountFuncWithParent2'

function CountParent2() {
  const [total, setTotal] = useState(0)

  return (
    <>
      <CountFuncWithParent2 total={total} setTotal={setTotal} />
      <button
        onClick={() => {
          setTotal(10)
        }}
      >
        Set Initial Number as 10.
      </button>
      <button
        onClick={() => {
          setTotal(100)
        }}
      >
        Set Initial Number as 100
      </button>
    </>
  )
}

export default CountParent2
