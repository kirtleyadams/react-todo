import { Component } from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
    const list = props.list.map((item) => {
        return <ToDo description={item} remove={props.remove}/>
    });
    
    return (
        <div>
            {list}
        </div>
    );
}

export default ToDoList;