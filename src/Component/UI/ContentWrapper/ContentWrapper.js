import React from 'react'
import classes from './ContentWrapper.module.scss'

const contentWrapper = (props) => {

    return(
<div ref={props.refs} className={[classes.ContentWrapper, classes[props.backgroundColor]].join(' ')}>
    {props.children}
</div>
    )
}

export default contentWrapper