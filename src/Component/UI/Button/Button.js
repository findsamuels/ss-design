import React from 'react'

import classes from './Button.module.scss'
import { NavLink, Link } from 'react-router-dom';

const button = (props) => {

  let btnClass = []
  btnClass = [
    classes[props.btnType],
    classes[props.color],
    classes.Button,
    props.className,
  ]
  let buttonType;
  if(props.type === 'link'){
    btnClass.push(classes.btnLink)
    buttonType = 
      <Link className={btnClass.join(' ')} to={props.to} >{props.children} </Link>
    
  }
  else {
    buttonType = <button
      onClick={props.clicked}
      className={btnClass.join(' ')}
    >
      {props.children}
    </button>
  }

    return buttonType
}

export default button