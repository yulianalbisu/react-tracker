import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    //displaying tasks from the backend
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])
  //this is a dependency array

  //fetch tasks data from the backend
  const fetchTasks = async () => {
    const resp = await fetch('http://localhost:5000/tasks')
    const data = await resp.json()

    // return data

    return data
  }

// ahora vamos a empezar a hacer update al reminder, 1. hay que cachar uno por uno las tasks
const fetchTask = async (id) => {
  const resp = await fetch(`http://localhost:5000/tasks/${id}`)
  const data = await resp.json()

  // return data

  return data
}


//1. create a function => delete task, this is the function

// Add Task we dont need an id, because it giv es us one

const addTask = async (task) => {
  //adding a random number until 10000
  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = { id, ...task }
  // setTasks([...tasks, newTask])})}
  //we dont need the above stuff, now this
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    //especified our content type
    headers: {
      'Content-type': 'application/json'
    },
    //where are we sending the data? into a json string
      body: JSON.stringify(task) //task is pass in async
    })
    
    //usamos await porque es una promess o sea esperamos que haga loading
    const data =  await res.json()

    //setting the entire array, and the new task
    setTasks([...tasks, data])

  }

//Delete task deleting task forever from back end so it doesnt appear again
const deleteTask = async(id) => {
  //what do we want? delete the task so, tasks.filter<=higher order array method js function
  //takes in the (task) then we want to delete, for each task i want to filter the task that is not
  //equal to the id, because that is what we are deleting
  //=> getting the delete working
  await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'DELETE'
  })

  setTasks(tasks.filter((task)=> task.id !== id))
}

const settingTask = () => {
  setShowAddTask(!showAddTask)
}
 //toggle reminder, hay que updated
const toggleReminder =  async(id) => {
  const taskToToggle = await fetchTask(id)
  const updTask = {...taskToToggle,
  reminder: !taskToToggle.reminder }

  //doing an update so we want the id
  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },

    body: JSON. stringify(updTask)

  })

  const data = await res.json()

  setTasks(tasks.map((task) => 
  task.id === id ? { ...task, reminder : data.reminder } 
  : task)
  )
}

  return (
    //asi podemos usar Routes con <router
    <Router>
    <div className="container">
      <Header onAdd={settingTask}
      showAdd={showAddTask}/>
      
      {/* queremos match exactly the path */}
      <Route path='/' exact render={(props) => (
        <>
          {showAddTask && <AddTask onAdd={addTask}/>}
      {/* 2. pass in a prop in here */}
      {/* if we have no tasks do this=> */}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      )
        : (
          "Make a new task"
          )
      }
        </>
      )} />
      <Route path='/about' component={About} />
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
