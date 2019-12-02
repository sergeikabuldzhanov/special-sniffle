import React, { useState, Component } from 'react';

export function CounterOld() {
  const [count, setCount] = useState(0);
  const increment = event => {
    setCount(count + 1);
  };
  const decrement = event => {
    setCount(currentCount => currentCount - 1);
  };
  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}

export default class Counter extends Component {

};
