import { useState } from 'react'

function FormFields() {
  const [textfield, setTextfield] = useState('')
  const [textarea, setTextarea] = useState('')
  const [selectedOption, setSelectedOption] = useState('')
  const [gender, setGender] = useState('')
  const [like, setLike] = useState({ optionA: false, optionB: true })

  const [likeList, setLikeList] = useState([])

  return (
    <>
      <h3>文字輸入框</h3>
      <input
        type="text"
        value={textfield}
        onChange={(e) => {
          setTextfield(e.target.value)
        }}
      />
      <hr />
      <h3>文字區域</h3>
      <textarea
        value={textarea}
        onChange={(e) => {
          setTextarea(e.target.value)
        }}
      />
      <hr />
      <h3>下拉式選單</h3>
      <select
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e.target.value)
        }}
      >
        <option value="">請選擇</option>
        <option value="雞腿">雞腿</option>
        <option value="滷肉">滷肉</option>
        <option value="排骨">排骨</option>
        <option value="水果">水果</option>
      </select>
      <hr />
      <h3>單選盒</h3>
      <label>男</label>
      <input
        type="radio"
        value="男"
        checked={gender === '男'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>女</label>
      <input
        type="radio"
        value="女"
        checked={gender === '女'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <label>未定</label>
      <input
        type="radio"
        value="未定"
        checked={gender === '未定'}
        onChange={(e) => {
          setGender(e.target.value)
        }}
      />
      <hr />

      <h3>勾選盒（物件布林值）</h3>
      <label>雞腿</label>
      <input
        type="checkbox"
        value="optionA"
        onChange={(e) => {
          const key = e.target.value
          setLike({
            ...like,
            [key]: !like[key],
          })
        }}
        checked={like.optionA}
      />
      <label>排骨</label>
      <input
        type="checkbox"
        value="optionB"
        onChange={(e) => {
          const key = e.target.value
          setLike({
            ...like,
            [key]: !like[key],
          })
        }}
        checked={like.optionB}
      />

      <h3>勾選盒（陣列值）</h3>
      <label>雞腿</label>
      <input
        type="checkbox"
        value="雞腿"
        onChange={(e) => {
          const value = e.target.value
          if (!likeList.includes(value))
            return setLikeList([...likeList, value])

          if (likeList.includes(value)) {
            const newLikeList = likeList.filter((v) => v !== value)
            setLikeList(newLikeList)
          }
        }}
        checked={likeList.includes('雞腿')}
      />
      <label>排骨</label>
      <input
        type="checkbox"
        value="排骨"
        onChange={(e) => {
          const value = e.target.value

          if (!likeList.includes(value))
            return setLikeList([...likeList, value])

          if (likeList.includes(value)) {
            const newLikeList = likeList.filter((v) => v !== value)
            setLikeList(newLikeList)
          }
        }}
        checked={likeList.includes('排骨')}
      />
    </>
  )
}

export default FormFields
