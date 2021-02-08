import HelloProps4 from './components/HelloProps4'
import HelloPropsClass3 from './components/HelloPropsClass3'

function App() {
  return (
    <>
      <HelloProps4
        name={'manui'}
        text={'sup!'}
        clickMethod={() => {
          alert('Wooooooow!')
        }}
      />
      <HelloPropsClass3
        clickMethod={() => {
          alert('Wooooooow! Classsss!')
        }}
      />
    </>
  )
}

export default App
