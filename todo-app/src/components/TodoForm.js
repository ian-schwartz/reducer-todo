import React, { useState } from 'react';

const TodoForm = (props) => {
    const [todo, setTodo] = useState();
    
    const handleChanges = e => {
        setTodo(e.target.value);
    };

    return (
        <div className='todo-form'>
        <input type='text' name='item' value={todo} onChange={handleChanges} />
          <button onClick={() => {
              props.dispatch({ type: 'ADD_TODO', payload: todo });
              setTodo('');
            }}>
            Add Todo
          </button>  
        </div>
    );
}

export default TodoForm;