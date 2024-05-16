import React, { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import TaskList from './TaskList'
import TaskForm from './TaskForm'
import CategoryFilter from './CategoryFilter'
import dummyTodos from './dummyTodos'

function App() {
  const [todos, setTodos] = useState(dummyTodos)

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
    <Router>
      <div className='mainDiv'>
        <nav>
          <ul>
            <li> <Link to="/">View Tasks</Link></li>
            <li><Link to="/add-task">Add Task</Link></li>
            <li><Link to="/category">Filter by Category</Link></li>
          </ul>
        </nav>

        <h1>Task Manager</h1>

        <Routes>
          <Route path="/add-task" element={<TaskForm addTodo={addTodo} todos={todos} />} />
          <Route path="/category" element={<CategoryFilter todos={todos} />} />
          <Route path="/" element={<TaskList todos={todos} />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
