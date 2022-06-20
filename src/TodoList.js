import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { AiFillCheckCircle } from 'react-icons/ai'
import {useState} from 'react';

// props decontructed to be used in this component.
function TodoList({todo, setTodo, input, setInput}) {

    // state of todo items that we want to edit.
    const [todoEditing, setTodoEditing] = useState(null)
    const [editingText, setEditingText] = useState("")

    const onInputChange = (e) => {
        setInput(e.target.value);
      };
    
      //Initial functionality of adding a todo item. Taking the event and once submitted preventing the page from reloading.
      const onFormSubmit = (e) => {
        e.preventDefault();
        setTodo([...todo, {id: uuidv4(), title: input, completed: false}]);
        setInput("");
      };

    //Functionality to take an already created todo item and allow it to editited using the spread operator and mapping through it. If the ID of it matches return the todo
      function editTodo(id) {
          const updatedTodo = [...todo].map((todo) => {
              if(todo.id === id) {
                  todo.title = editingText;
              }
              return todo;
          })
          setTodo(updatedTodo);
          setTodoEditing(null);
          setEditingText("");
      }

      //Arrow function to remove a todo task, using the spread operator and filtering.
      const removeTodo = id => {
          const removeArr = [...todo].filter(todo => todo.id !== id)
          setTodo(removeArr);
      }

    

    return (
        // JSX for the initial Form to fill out the todo item and its "Add button"
        <div>
            <form onSubmit={onFormSubmit}>
                <input 
                    type="text"
                    maxLength={25}
                    placeholder="Enter a To do"
                    class="task-input text-center fs-4"
                    value={input}
                    required
                    onChange={onInputChange}
                />
                <button class="button-add fs-4" type="submit">
                    Add
                </button>   
            </form>
            <div>

                <br></br>
                 
                {/* JSX to monipulate the DOM for the Tasks created, and buttons to Destroy, Edit, and Submit */}
                {todo.map((todo)=> (
                    <ul class="todo-list p-3" key={todo.id}>
                        <input 
                        type="text" 
                        value={todo.title} 
                        class="list text-center bg-primary text-wrap text-white fs-2" 
                        onChange={(e) => e.preventDefault()}
                        />
                        
                        {todoEditing === todo.id ? (<input 
                         type="text" 
                         onChange={(e) => setEditingText(e.target.value)} 
                         value={editingText}
                         class="list text-center bg-warning text-wrap text-black fs-2"
                         />)
                         : <div>{todo.text}</div>} 
                        
                        <RiCloseCircleLine onClick={() => removeTodo(todo.id)}
                                           className="delete-icon btn-outline-danger fs-1"/>
                        <TiEdit onClick={() => setTodoEditing(todo.id)}
                                className="edit-icon btn-outline-warning fs-1"/>
                        <AiFillCheckCircle onClick={() => editTodo(todo.id)}
                                className="submit-icon btn-outline-success fs-1"
                        />
                        
                    </ul>
                ))}
            </div>
           
            <br></br>

            <div class={todo.isComplete ? 'todo-row complete' : 'todo-row' }
                 key={todo.id}
            >
            </div>
        </div>
    )

}

export default TodoList;


