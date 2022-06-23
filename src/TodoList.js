import React from 'react';
import {v4 as uuidv4} from 'uuid';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import { AiFillCheckCircle } from 'react-icons/ai'
import {useState} from 'react';

// props decontructed to be used in this component.
function TodoList({todo, setTodo, input, setInput}) {

    // state of todo items that we want to edit.
    const [todoEditing, setTodoEditing] = useState(null);
    const [editingText, setEditingText] = useState("");

      //Initial functionality of adding a todo item. Taking the event and once submitted it is preventing the page from refreshing with the preventDefault function.
      // After clicking the add button it will render that item to the page with a unique ID, a title of the submitted to do item.
      // While also resetting the form to an empty string upon adding that to do item. implemented on the JSX form on line 56
      const onFormSubmit = (e) => {
        e.preventDefault();
        setTodo([...todo, {id: uuidv4(), title: input }]);
        setInput("");
      };

    // This function is allowing us to type into the "Enter a To do" form field and is capturing each keystroke being typed
    // and then returning the setInput state. Line 64
      const onInputChange = (e) => {
        setInput(e.target.value);
      };

    // This function is mapping over todo items rendered to the page, if the ID of the selected todo items match, then an input field
    // will render in and you can then edit the todo item within that field. Todo state will then be updated once you click the submit(green)
    // onClick event function on line 104-107
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

      // This function taking each todo item from the deconstructed props at the top of the page and using the filter method on each item.
      // It's saying that if our todo id is NOT equal to the id and you click the delete button(red) it will then be removed
      // Line 102
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
                 
                {/* This is where the Tasks are rendered once added, creating an unordered list with 3 icons below each list item, 
                    A delete icon, edit icon, and a submit icon.*/}

                {todo.map((todo)=> (
                    <ul class="todo-list p-3" key={todo.id}>
                        <input 
                        type="text" 
                        value={todo.title} 
                        class="list text-center bg-primary text-wrap text-white fs-2" 
                        />
                        
                        {/* If the Edit button (yellow) is clicked we will have an input field render in with 
                            an empty text field. This comes from state "editingText" (which is an empty string to start).
                            The onChange function will then change the state of editingText to setEditingText per keystroke. When
                            submitted (green icon) the new todo item will then replace the old*/}

                        {todoEditing === todo.id ? (<input 
                         type="text" 
                         maxLength={23}
                         placeholder="Edit to do"
                         onChange={(e) => setEditingText(e.target.value)} 
                         value={editingText}
                         class="list text-center bg-warning text-wrap text-black fs-2"
                         />)
                         : <div class="find">{todo.text}</div>} 
                        
                        {/* onClick of these icons they each will have a different functionality such as Deleting a Todo item
                            Allow editing of a todo item, and Submitting a todo item after its done being edited*/}

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
        </div>
    )

}

export default TodoList;


