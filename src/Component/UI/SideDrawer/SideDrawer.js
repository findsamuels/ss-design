import React from 'react'
import classes from './SideDrawer.module.scss'
import Icons from '../Icons/Icons'
import { connect } from 'react-redux'
import Logo from '../Logo/Logo'

 const sideDrawer = (props) => {


     let drawerClass = [
         classes.SideDrawer,
         classes[props.position]
     ].join(' ')

     if (props.showDrawer) {
        drawerClass = [
            classes.show,
            classes.SideDrawer,
            classes[props.position]
        ].join(' ')
     }

    
   
    
  

    return(
<div onClick={props.clicked} className={drawerClass}>
    <div  className={classes.SideBanner}>
                <Logo size='md' />
                <div onClick={props.clicked}>
                    <Icons clicked={props.clicked} icon='times' fontSize='lg' color='darkGrey' />
        </div>
        
    </div>
{props.children}
</div>
    )
}

const mapStateToProps = state => {
    return {
        showDrawer: state.uiReducer.showDrawer
    }
}


export default connect(mapStateToProps, null)(sideDrawer)