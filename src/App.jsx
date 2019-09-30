import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Container from './components/Container';

const todoList = [
  { id: '1', name: "sweeping", completed: false },
  { id: '2', name: "mopping", completed: false },
  { id: '3', name: "washing dishes", completed: false },
];

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

function Counter() {
  const [count, setCount] = useState(0);
  const increment = event => setCount(count + 1);
  const decrement = event => setCount(count - 1);
  return (
    <div>
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  )
}

function Form() {
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
  });
  const onValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }
  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${formValues.lname}, ${formValues.fname}`)
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label>first name
        <input value={formValues.fname} onChange={onValueChange} name='fname' />
      </label>

      <label>
        <input value={formValues.lname} onChange={onValueChange} name='lname' />
      </label>

      <button>submit</button>
    </form>
  )
}

ReactDOM.render(<>
  <Form />
  <Counter />
  <Todos />
</>,
  document.querySelector('#target'),
);
