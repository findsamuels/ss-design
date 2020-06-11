import React from 'react'
import classes from './Layout.module.scss'
import SideNavItems from '../../Component/SideNavItems/SideNavItems'
import {useDispatch} from 'react-redux'
import * as actionCreators from '../../Store/actions/index'
import BackDrop from '../../Component/UI/BackDrop/BackDrop'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
const Layout = (props) => {

   const dispatch = useDispatch()
    const onToggleDrawer = () => {
        dispatch(actionCreators.toggleSideDrawer())
    }
    const onHideModalAndDrawer = () => {
        dispatch(actionCreators.hideModalAndDrawer())
    }


        return (
            <div className={classes.Layout}>
               
                <BackDrop clicked={onHideModalAndDrawer} />
                    <NavBar clicked={onToggleDrawer} />
                    <SideNavItems clicked={onToggleDrawer} />
               
                    {props.children}

            </div>
        )

   
}



export default Layout