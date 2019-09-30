import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = event => setCount(count + 1);
  const decrement = event => setCount(count - 1);
  return (
    <div className='component'>
      The count is {count}
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
    </div>
  );
}
