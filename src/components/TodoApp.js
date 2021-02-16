import { useState } from 'react'

function TodoApp() {
  const [todo, setTodo] = useState('')

  // 將每個事項改為物件值，物件定義如下：
  // {id:number, text:string, completed:bool}
  const [todos, setTodos] = useState([
    { id: 1, text: '唐吉軻德逛街買東西', completed: false },
    { id: 2, text: '買 iPhone 12 Pro Max', completed: true },
    { id: 3, text: '在家檢疫 14 天', completed: false },
  ])

  const handleCompleted = (id) => {
    const newTodos = [...todos]
    const index = newTodos.findIndex((item) => item.id === id)

    if (index !== -1) {
      newTodos[index].completed = !newTodos[index].completed

      setTodos(newTodos)
    }
  }

  const handleAddNew = (e) => {
    if (e.key === 'Enter' && e.target.value.trin()) {
      const newTodoItem = {
        id: +new Date(),
        text: e.target.value,
        completed: false,
      }

      const newTodos = [newTodoItem, ...todos]

      setTodos(newTodos)

      setTodo('')
    }
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)

    setTodos(newTodos)
  }

  return (
    <>
      <h1>待辦事項</h1>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
        onKeyPress={(e) => {
          handleAddNew(e)
        }}
      />
      <ul>
        {todos.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => {
                  handleCompleted(item.id)
                }}
              />
              {item.completed ? <del>{item.text}</del> : item.text}
              <button
                onClick={() => {
                  handleDelete(item.id)
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default TodoApp
