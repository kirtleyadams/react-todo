import React, { useState useEffect, useRef, } from 'react'

function TodoForm(props) {
    const { input, setInput } = useState('props.edit ? props')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    });




    const handleChange = e => {
        setInput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDecault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
    };
    return (
        <div>
            <form className='todo-form' onSubmit={handleSubmit}>
                {props.edit ? (
                    <>
                        <input
                            type="text"
                            placeholder='Update'
                            value='{input}'
                            name='text'
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-button' >update</button>
                    </>
                 }  :{
                    <>
                        <input
                            type="text"
                            placeholder='add a todo'
                            value='{input}'
                            name='text'
                            className="todo-input"
                            onChange={handleChange}
                            ref={inputRef}
                        />
                        <button className='todo-button'>Add Todo</button>
                    </>
                }
                )}


            </form>
        </div>
    )
}

export default TodoForm
