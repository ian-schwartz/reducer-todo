import React from "react";

const Todo = props => {
  return (
    <div
      className={`todo${props.todo.completed ? " completed" : ""}`}
      onClick={() => props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.todo.id})}
    >
      <p>{props.todo.item}</p>
    </div>
  );
};

export default Todo;