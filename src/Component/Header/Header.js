import React from 'react'
import classes from './Header.module.scss'

import HeaderText from './HeaderText/HeaderText'

const header = (props) => {
    return(
        <div style={{backgroundImage: "url(../img/banner.png)"}} className={classes.Header}>
            <div className={classes.Overlay}>

                <HeaderText />
            </div>
            
        </div>
    )
}

export default header