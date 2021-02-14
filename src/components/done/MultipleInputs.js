import { useState, useEffect } from 'react'

function MultipleInputs(props) {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    birth: '',
    price: '',
  })

  const onChangeField = (fieldName) => (event) => {
    setInputs((state) => ({ ...state, [fieldName]: event.target.value }))
  }

  return (
    <>
      <input
        type="text"
        value={inputs.name}
        name="name"
        onChange={onChangeField('name')}
      />
      <input
        type="text"
        value={inputs.email}
        name="email"
        onChange={onChangeField('email')}
      />
      <input
        type="text"
        value={inputs.username}
        name="username"
        onChange={onChangeField('username')}
      />
      <input
        type="password"
        value={inputs.password}
        name="password"
        onChange={onChangeField('password')}
      />
      <input
        type="date"
        value={inputs.birth}
        name="birth"
        onChange={onChangeField('birth')}
      />
      <input
        type="range"
        value={inputs.prince}
        name="prince"
        onChange={onChangeField('prince')}
      />
    </>
  )
}

export default MultipleInputs
