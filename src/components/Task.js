import { FaTimes } from 'react-icons/fa'

// actual button is here.
//5. pass the onDelete prop in here to, coming from tasks, 
//6. when do we want to call this function? when we click the button, so==> onClick={onDelete}
//7. line onClick, takes in a function that fires onDelete, with the id
//className= for task if the reminder of the task is dobleClicked va a ser 'reminder' class
//otherwise va a ser nada, o sea vacio.

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} <FaTimes 
            style={{color: 'grey', cursor:'pointer'}}
            onClick={()=>onDelete(task.id)}
            ></FaTimes></h3>
            <p>{task.day}</p>    
        </div>
    )
}

export default Task
