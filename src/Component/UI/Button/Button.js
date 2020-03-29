import React from 'react'

import classes from './Button.module.scss'

const button = (props) => {

    return(
<button onClick={props.clicked}  className={[classes[props.btnType], classes[props.color], classes.Button].join(' ')}>
    {props.children}
</button>
    )
}

export default button