import React from 'react'
import classes from './Logo.module.scss'
import {NavLink} from 'react-router-dom'

let goToTop = () => {
    window.scrollTo(0, 0)
}

const logo = (props) => {

    return(
        <NavLink onClick={goToTop} to='/' className={[classes.Logo, classes[props.color], classes[props.size], classes[props.margin]].join(' ')}>SS DESIGN</NavLink>
    )
}

export default logo