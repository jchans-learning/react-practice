import React from 'react'
import PropTypes from 'prop-types'

class HelloPropsClass3 extends React.Component {
  // 建構式要得到 props 的寫法
  constructor(props) {
    super(props)
    this.state = {}
    console.log(props)
  }

  render() {
    const { name, text, clickMethod } = this.props
    return (
      <h1 onClick={clickMethod}>
        {name}, {text}
      </h1>
    )
  }
}

// 預設屬性
HelloPropsClass3.defaultProps = {
  name: 'Buck',
  text: 'Helloooooo',
}

HelloPropsClass3.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  clickMethod: PropTypes.func,
}

export default HelloPropsClass3
