import React from 'react'

class CountClass5 extends React.Component {
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
      alert('你按到我了！')
    })
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    document
      .getElementById('clickme')
      .removeEventListener('click', function () {
        alert('你按到我了！')
      })
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
    console.log('目前的狀態是', this.state.total)
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>{this.state.total}</h1>
        <button id="clickme">按我</button>
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

export default CountClass5
