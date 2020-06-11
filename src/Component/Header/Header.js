import React from 'react'
import classes from './Header.module.scss'
import bannerimg from '../../../src/assets/img/banner.jpg'
import HeaderText from './HeaderText/HeaderText'

const header = (props) => {
    return(
        <div style={{backgroundImage: `url(${bannerimg}`}} className={classes.Header}>
            <div className={classes.Overlay}>

                <HeaderText />
            </div>
            
        </div>
    )
}

export default header