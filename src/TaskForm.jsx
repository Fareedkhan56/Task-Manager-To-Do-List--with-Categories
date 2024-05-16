import React, { useState } from 'react'

const TaskForm = ({ todos, addTodo }) => {
  const [task, setTask] = useState('')
  const [category, setCategory] = useState('')
  const [completed, setCompleted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = todos.length ? Math.max(...todos.map(todo => todo.id)) + 1 : 1

    const newTodo = {
      id: id,
      task: task,
      category: category,
      completed: completed
    }

    addTodo(newTodo)
    setTask('')
    setCategory('')
    setCompleted(false)
  }

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div className="formDiv" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px' }}>
          <input type="text" name='task' placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
          <input type="text" name='category' placeholder='Enter category' onChange={(e) => setCategory(e.target.value)} />
          <input type="checkbox" name='completed' checked={completed} onChange={(e) => setCompleted(e.target.checked)} />
          <p>Mark as Completed</p>
        </div>
        <button type="submit">Add Task</button>
      </form>
    </>
  )
}

export default TaskForm