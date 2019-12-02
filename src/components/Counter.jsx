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
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      amIHappy: true,
    };
  }

  increment = () => {
    this.setState({
      // what slices do I want to change?
      // whatever slices need changing add below
      count: this.state.count + 1,
    });
    this.setState({
      count: this.state.count + 2,
    });
  }

  decrement() {

  }

  render() {
    return (
      <div className='component'>
        The count is {this.state.count}
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
