import React from 'react'
//reemplazando el href por link
import { Link } from 'react-router-dom'
//route component too

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            {/* este se usa pero mejor se usara el Link directo from react */}
            {/* <a href='/'>Go Back</a> */}
            {/* exportando el link asi */}
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
