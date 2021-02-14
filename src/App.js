import { useState } from 'react'
import CountFunc2 from './components/CountFunc2'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && <CountFunc2 />}
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
