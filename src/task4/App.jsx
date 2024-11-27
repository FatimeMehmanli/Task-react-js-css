import React, { useState, useEffect } from 'react';
import './Todo.css';


const App = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching todos:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <div className="container">
            <h1 className="title">Todo List</h1>
            <ul className="todo-list">
                {todos.map(todo => (
                      <li
                      key={todo.id}
                      className={`todo-item ${todo.completed ? 'completed' : 'not-completed'}`}
                  >
                      {todo.title}
                  </li>
                ))}
            </ul>
        </div>
    );
};

export default App;