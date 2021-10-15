import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onclick = () =>{
        console.log('click')
    }
    return (
        <header className='header'>
           <h1>{title}</h1> 
           <Button color='green' text='Add' onClick={onclick}/>  
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string
}

//CSS in JSS if added style={headingStyle}
// const headingStyle = {
// color: 'red'
// }

export default Header
