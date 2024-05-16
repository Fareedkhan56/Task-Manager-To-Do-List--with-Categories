import React from 'react'

const TaskList = ({ todos }) => {
    return (
        <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
            {todos.map((task) => (
                <li key={task.id} style={{ listStyle: 'none', border: '1px solid white', padding: '20px', margin: '10px' }}>
                    <h3>{task.task}</h3>
                    <p>Category: {task.category}</p>
                    <p>Completed: {task.completed ? 'Completed' : 'Not Complete'}</p>
                </li>
            ))}
        </ul>
    )
}

export default TaskList
