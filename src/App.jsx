import React from 'react';
import ReactDOM from 'react-dom';
import Todos from './components/Todos';
import Counter from './components/Counter';
import Form from './components/Form';
import Market from './components/Market';

import './App.less';

ReactDOM.render(<>
  <Form />
  <Counter />
  <Todos />
  <Market />
</>, document.querySelector('#target'));
