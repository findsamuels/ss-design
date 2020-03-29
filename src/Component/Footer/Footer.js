import React from 'react'
import classes from './Footer.module.scss'

const footer = (props) => {

    return(
        
            <div className={classes.Footer}>
                <p>Website Created by <span style={{ fontStyle: 'italic' }}>Samuel Simon © {`${new Date().getFullYear()}`}</span></p>
            </div>
    

    )
}

export default footer