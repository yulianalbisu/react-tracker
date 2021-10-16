import React from 'react'
import Task from './Task'

// 3. onDelete is a prop so, we pass the prop in here
const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        //setTasks([...tasks, {}])
        <>
           {tasks.map((task) => (
               //2. pass the prop in here, comming from app, because in there is where we have the event
           <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
           ))} 
        </>
    )
}

export default Tasks
