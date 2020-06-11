import React from 'react'
import Button from '../../UI/Button/Button'
import classes from './HeaderText.module.scss'
import Icon from '../../UI/Icons/Icons'


const HeaderText = (props) => {
    return(
        <div className={classes.HeaderText}>
            <Icon fontSize='xxl' icon='cloud-moon' color='white'/>
            <h1 className={classes.Heading2}>Samuel Simon  </h1>
            <h2 >Web application developer</h2>
            <div className={classes.btnDiv}>
                <Button color='darkGrey' type='link' to='/portfolio' >MY WORK</Button>
            </div>
          
        </div>
    )
}

export default HeaderText