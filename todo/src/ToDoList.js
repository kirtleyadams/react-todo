import { Component } from 'react';
import ToDo from './ToDo';

const ToDoList = (props) => {
    const list = props.list.map((item, index) => {
        return <ToDo description={item} remove={props.remove} id={index}/>
    });
    
    return (
        <div>
            {list}
        </div>
    );
}

export default ToDoList;