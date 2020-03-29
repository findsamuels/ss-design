import React from 'react'
import classes from './Icons.module.scss'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const icons = (props) => {
    return(
        <FontAwesomeIcon key={props.key} href={props.link} onClick={props.clicked} className={[classes.FontAwesomeIcon, classes[props.margin], classes[props.position], classes[props.fontSize], classes[props.color]].join(' ')} icon={props.icon}/>
    )
}

export default icons