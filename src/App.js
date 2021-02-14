import { useState } from 'react'
import CountClass4 from './components/CountClass4'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      {show && <CountClass4 />}
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
