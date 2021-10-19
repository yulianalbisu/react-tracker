import React from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Button from './Button'

//this props came from the main component

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation()
    return (
        <header className='header'>
           <h1>{title}</h1> 
           {/* asi se hace un (condition) si location is the home page, show the button....if statement cuando se quieren mostrar componentes */}
           {location.pathname === '/' && (<Button color={showAdd ? 'orange' : 'grey'}
           text={showAdd ? 'Close' : 'Add'} 
           onClick={onAdd}
           /> )} 
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
