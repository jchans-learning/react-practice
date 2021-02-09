import { useState } from 'react'
import ChildOne from './ChildOne'
import ChildTwo from './ChildTwo'

function Parent3() {
  const [data, setData] = useState('')

  return (
    <>
      <ChildOne setData={setData} />
      <ChildTwo data={data} />
    </>
  )
}

export default Parent3
