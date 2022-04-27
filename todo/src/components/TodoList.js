import React, { useState } from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        if (!todo.text || /^|s*$/.test(todo.text)) {
            return
        }
        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    const updatedTodos = (todoId, newValue) => {
        if (!newValue.text || /^|s*$/.test(newValue.text)) {
            return
        }
        setTodos(prev => prev.map {item.id === todoId ? newValue : item}
            );
    }

    const removeTodo = id => {
        const removeARr = [...todos].filter(todo => todo.id !== id)
        setTodos{removeArr};
    }

    

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id = id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updatedTodos);
    }
    return (
        <div>
            <h1> what's the plan for today</h1>
            <TodoForm onSubmit = {addTodo}/>
            <Todo todo={todos} completeTodod={completeTodo} removeTodo={removeTodo}
            updatedTodos
            />
        </div>
    )
}

export default TodoList