import React, { useState } from 'react';

export function FormOld() {
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
  });
  const onValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const onFormSubmit = event => {
    event.preventDefault();
    alert(`submitting ${formValues.lname}, ${formValues.fname}`);
  };
  return (
    <form className='component' onSubmit={onFormSubmit}>
      <label>first name
        <input value={formValues.fname} onChange={onValueChange} name='fname' />
      </label><br />

      <label>last name
        <input value={formValues.lname} onChange={onValueChange} name='lname' />
      </label><br />

      <button>submit</button>
    </form>
  );
}

export default class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formValues : {
        fname: '',
        lname: '',
    }}
    this.onValueChange = this.onValueChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onValueChange (event){
    console.log(event);
    
    // event.persist();    
    this.setState(oldState =>({
      formValues:{
        ...oldState.formValues,
        [event.target.name]: event.target.value,
      }
    }));
  };

  onFormSubmit (event){
    event.preventDefault();
    alert(`submitting ${this.state.formValues.lname}, ${this.state.formValues.fname}`);
  };

  render() {

    return (
      <form className='component' onSubmit={this.onFormSubmit}>
        <label>first name
          <input value={this.state.formValues.fname} onChange={this.onValueChange} name='fname' />
        </label><br />
  
        <label>last name
          <input value={this.state.formValues.lname} onChange={this.onValueChange} name='lname' />
        </label><br />
  
        <button>submit</button>
      </form>
    );
    
  }
}