import React from 'react'

class CountClass2 extends React.Component {
  constructor() {
    super()
    this.state = {
      total: 0,
    }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    document.getElementById('clickme').addEventListener('click', function () {
      alert('You Pressed the Button')
    })
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>{this.state.total}</h1>
        <button id="clickme">Click Me</button>
        <button
          onClick={() => {
            const newTotal = this.state.total + 1
            this.setState({ total: newTotal })
            console.log(newTotal)
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ total: this.state.total - 1 })
          }}
        >
          -1
        </button>
      </>
    )
  }
}

export default CountClass2
