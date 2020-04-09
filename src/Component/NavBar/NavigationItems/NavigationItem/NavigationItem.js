import React from 'react'
import classes from './NavigationItem.module.scss'
import {NavLink} from 'react-router-dom'
import {useSelector} from 'react-redux'
const NavigationItem = (props) => {

    const aboutRef = useSelector( state => state.contentReducer.aboutRef)
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
     
        
    }


    return (
        <li onClick={() => scrollToComponent(props.names)} className={classes.NavigationItem}>
            <NavLink className={classes.NavigationLink} to={props.link} exact={props.exact} >{props.children}</NavLink>
        </li>
    )

   
}


export default NavigationItem