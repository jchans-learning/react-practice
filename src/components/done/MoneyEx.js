import { useState } from 'react'

function MoneyEx() {
  const [money, setMoney] = useState('')
  const [exMoney, setExMoney] = useState('')

  return (
    <>
      <input
        type="text"
        value={money}
        onChange={(e) => {
          setMoney(e.target.value)
        }}
      />
      <button
        onClick={() => {
          setExMoney((+money / 28.53).toFixed(2))
        }}
      >
        美金轉台幣
      </button>
      <button
        onClick={() => {
          setExMoney((+money * 28.53).toFixed(0))
        }}
      >
        台幣轉美金
      </button>
      <h3>轉換過的金額是：{exMoney}</h3>
    </>
  )
}

export default MoneyEx
