import React, { Component} from 'react';

 const ToDo = (props) => {
    return (
        <div>
            {props.description}
            <button class="delete" onClick={() => {props.remove(props.id)}}>Delete</button>
        </div>
    )
}

export default ToDo;