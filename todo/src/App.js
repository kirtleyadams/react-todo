import  ToDoList  from './ToDoList';
import  ToDo from './ToDo';
import React from 'react';
import SubmitForm from './SubmitForm';
import { Component} from 'react'
import 'app.css' from './app.css';


class App extends React.Component {
  state = {
    list: ['task 1', 'task 2', 'task 3']
  };

  handleDelete = (index) => {
    const newArray = [...this.state.list];
    newArray.splice(index, 1);
    this.setState({list: newArray });
  }

  addItem = (item) => {
    this.setState ({list: [...this.state.list, item]});
  }

  render () {
    return (
      <div>
        <ToDoList list={this.state.list} remove={this.handleDelete} addItem={this.addItem} />
        <SubmitForm onFormSubmit ={this.addItem}/>
      </div>
    );
  }
}
export default App;
