import React, { useReducer } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';
import { initialState, reducer } from './reducers/todoReducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <div className="App">
      <h1>Todos</h1>
      <TodoForm dispatch={dispatch} />
      <button onClick={() => dispatch({ type: "REMOVE_COMPLETED" })}>Remove Completed</button>
      {state.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />
      })}
    </div>
  );
}

export default App;
