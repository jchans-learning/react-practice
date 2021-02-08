import HelloProps3 from './components/HelloProps3'
import HelloPropsClass2 from './components/HelloPropsClass2'

function App() {
  return (
    <>
      <HelloProps3 name={undefined} text={'Whaaat'} />
      <HelloPropsClass2 />
    </>
  )
}

export default App
