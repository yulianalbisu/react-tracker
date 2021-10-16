import { useState } from 'react'
import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'School Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true, 
    },
    {
        id: 3,
        text: 'React Meeting',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    }
])

//1. create a function => delete task, this is the function
// Add Task

const addTask = (task) => {
  console.log(task);
}
const deleteTask = (id) => {
  //what do we want? delete the task so, tasks.filter<=higher order array method js function
  //takes in the (task) then we want to delete, for each task i want to filter the task that is not
  //equal to the id, because that is what we are deleting
  setTasks(tasks.filter((task)=> task.id !== id))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder } : task))
}

  return (
    <div className="container">
      <Header/>
      <AddTask 
      onAdd={addTask}/>
      {/* 2. pass in a prop in here */}
      {/* if we have no tasks do this=> */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      )
        : ("Make a new task")
      }
      
    </div>
  );
}

export default App;
