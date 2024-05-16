import React, { useState, useEffect } from 'react'

const CategoryFilter = ({ todos }) => {
    const [uniqueCategories, setUniqueCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [filteredTask, setFilteredTask] = useState([])

    useEffect(() => {
        const categoriesSet = new Set(todos.map(todo => todo.category))
        setUniqueCategories(Array.from(categoriesSet))
    }, [todos])

    useEffect(() => {
        if (selectedCategory) {
            setFilteredTask(todos.filter(task => task.category === selectedCategory))
        } else {
            setFilteredTask(todos)
        }
    }, [selectedCategory, todos])

    const handleCategoryChange = (e) => {
        setSelectedCategory(e.target.value)
    }

    return (
        <>
            <div>
                <h4>Select Category</h4>
                <select onChange={handleCategoryChange}>
                    {uniqueCategories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>

            <div>
                <ul style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                    {filteredTask.map((task, index) => (
                        <li key={task.id} style={{ listStyle: 'none', border: '1px solid white', padding: '20px', margin: '10px' }}>
                            <h3>{task.task}</h3>
                            <p>Category : {task.category}</p>
                            <p>Completed : {task.completed == true ? 'Completed' : 'Not-Complete'}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default CategoryFilter
