import React from 'react';
import { useState } from 'react';
import TodoList from './TodoList'

function Todo() {

  //initial state of input, todo tasks, and editing created tasks
  const [input, setInput] = useState("")
  const [todo, setTodo] = useState([])
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  })

  
    return (
      <div>
        <br></br>
        <div>
          <TodoList todo={todo} setTodo={setTodo} input={input} setInput={setInput} edit={edit} setEdit={setEdit} />
        </div>
      </div>
    )

}

export default Todo;