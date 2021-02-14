import { useState } from 'react'
import CountFunc3 from './components/CountFunc3'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && <CountFunc3 />}
      <hr />
      <button
        onClick={() => {
          setShow(!show)
        }}
      >
        {show ? '消失吧' : '復活吧'}
      </button>
    </>
  )
}

export default App
