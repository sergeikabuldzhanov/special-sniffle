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
    // gotcha 1, with "traditional" methods
    this.decrement = this.decrement.bind(this);
  }

  increment = () => {
    this.setState(oldState => ({
      // what slices do I want to change?
      // whatever slices need changing add below
      count: oldState.count + 1,
    }));
    // this.setState(st => ({
    //   count: st.count + 2,
    // }));
  }

  decrement() { // this is a "traditional method"
    this.setState(oldState => ({
      count: oldState.count - 1,
    }));
  }

  render() {
    return (
      <div className='component'>
        {this.props.children} {this.props.name}!
        The count is {this.state.count}
        <button onClick={this.increment}>increment</button>
        <button onClick={this.decrement}>decrement</button>
      </div>
    );
  }
}
