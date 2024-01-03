import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'
function TodoList() {
  const todos=useSelector((state)=>{
    return state.todos
  })
console.log(todos);
  return (
    <div>
      <ul className='list-group mt-4'>
        {todos.map((todo) => (
          <Todo key={todo.id} id={todo.id} title={todo.title} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList