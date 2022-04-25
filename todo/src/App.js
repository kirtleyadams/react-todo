import  ToDoList  from './ToDoList';
import { ToDo } from './ToDo';
import React from 'react';

class App extends React.Component {
  state = {
    list: ['task 1', 'task 2', 'task 3']
  };

  handleDelete = (index) => {
    const newArray = [...this.state.list];
    newArray.splice(index, 1);
    this.setState({list: newArray });
  }

  render () {
    return (
      <div>
        <ToDoList list={this.state.list} remove={this.handleDelete} />
      </div>
    );
  }
}
export default App;
