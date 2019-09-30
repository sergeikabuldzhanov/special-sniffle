import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';

const todoList = [
  { id: '1', name: "sweeping", completed: false },
  { id: '2', name: "mopping", completed: false },
  { id: '3', name: "washing dishes", completed: false },
];

// class Todos extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       todos
//     };
//   }
// }
function Todos(props) {
  const [todos, setTodos] = useState(todoList);
  const markTodo = (id, isComplete) => event => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return { id: todo.id, name: todo.name, complete: isComplete };
    }))
  }
  return (
    <div>
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
  )
}

ReactDOM.render(
  <Todos />,
  document.querySelector('#target'),
);
