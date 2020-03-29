import React from 'react'

import classes from './HeaderText.module.scss'
import Icon from '../../UI/Icons/Icons'

const headerText = (props) => {
    return(
        <div className={classes.HeaderText}>
            <Icon fontSize='xxl' icon='cloud-moon' color='white'/>
            <h1 className={classes.Heading2}>Samuel Simon  </h1>
            <h2 >Web application developer</h2>
        </div>
    )
}

export default headerText