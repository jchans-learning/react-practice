import Child2 from './Child2'
import { useState } from 'react'

function Parent2() {
  const [data, setData] = useState('')

  return (
    <>
      <h1>{data}</h1>
      <Child2 setData={setData} />
    </>
  )
}

export default Parent2
