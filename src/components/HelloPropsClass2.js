import React from 'react'

class HelloPropsClass2 extends React.Component {
  // 建構式要得到 props 的寫法
  constructor(props) {
    super(props)
    this.state = {}
    console.log(props)
  }

  render() {
    const { name, text } = this.props
    return (
      <h1>
        {name}, {text}
      </h1>
    )
  }
}

// 預設屬性
HelloPropsClass2.defaultProps = {
  name: 'Buck',
  text: 'Helloooooo',
}

export default HelloPropsClass2
