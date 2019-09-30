import React, { useState } from 'react';

const todoList = [
  { id: '1', name: "sweeping", completed: false },
  { id: '2', name: "mopping", completed: false },
  { id: '3', name: "washing dishes", completed: false },
];

export default function Todos(props) {
  const [todos, setTodos] = useState(todoList);
  const markTodo = (id, isComplete) => event => {
    // markTodo needs to return a function that takes an event,
    // se we can attach it to a click handler in the JSX
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return { id: todo.id, name: todo.name, complete: isComplete };
    }));
  };
  return (
    <div className='component'>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            {todo.name} is {!todo.complete && 'NOT '}completed
            <button onClick={markTodo(todo.id, true)}>Mark complete</button>
            <button onClick={markTodo(todo.id, false)}>Mark incomplete</button>
          </div>
        ))
      }
    </div>
  );
}
