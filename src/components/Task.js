import { FaTimes } from 'react-icons/fa'
import Tasks from "./Tasks"


const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes></FaTimes></h3>
            <p>{task.day}</p>    
        </div>
    )
}

export default Task
