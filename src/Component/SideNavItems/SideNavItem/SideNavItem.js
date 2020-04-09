import React from 'react'
import classes from './SideNavItem.module.scss'
import {NavLink} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import * as actionCreators from '../../../Store/actions/index'
const SideNavItem = (props) =>  {
    const dispatch = useDispatch()
    const aboutRef = useSelector(state => state.contentReducer.aboutRef)
    const skillRef = useSelector(state => state.contentReducer.skillRef)
    const experienceRef = useSelector(state => state.contentReducer.experienceRef)
    const contactRef = useSelector(state => state.contentReducer.contactRef)


    const scrollToComponent = (name) => {
        switch (name) {
            case 'about':
                aboutRef.current.scrollIntoView()

                break;
            case 'experience':
                skillRef.current.scrollIntoView()
                break;
            case 'skills':
                experienceRef.current.scrollIntoView({
                    bahaviour: 'smooth'
                })
                break;
            case 'contact':
                contactRef.current.scrollIntoView()
                break;

            default:
                window.scrollTo(0, 0)
        }
    
        dispatch(actionCreators.toggleSideDrawer())
        
    }
   
        return (
            <li onClick={() => scrollToComponent(props.names)} className={classes.SideNavItem}>
                <NavLink onClick={props.clicked} className={classes.SideNavLink} to={props.link}>{props.children}</NavLink>
            </li>
        )
    
   
}


export default SideNavItem