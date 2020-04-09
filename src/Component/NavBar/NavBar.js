import React, { useState } from 'react'
import classes from './NavBar.module.scss'
import NavigationItems from './NavigationItems/NavigationItems'
import Icons from '../UI/Icons/Icons'
import Logo from '../UI/Logo/Logo'
import {useSelector} from 'react-redux'
const NavBar = (props) => {

    const scrolled = useSelector(state => state.uiReducer.scrolled)
    const showNavItems = useSelector(state => state.uiReducer.showNavItems)
   


    const [icons, ] = useState({
        instagram: {
            icon: ["fab", "instagram"],
            link: "https://www.instagram.com/findsamuel/"
        },
        facebook: {
            icon: ["fab", "facebook"],
            link: "https://www.facebook.com/"
        },
        linkden: {
            icon: ["fab", "linkedin"],
            link: "https://www.linkedin.com/in/sam-simon-a23900189/"
        },
        Git: {
            icon: ["fab", "github"],
            link: "https://github.com/findsamuels"
        }
    })
  
        
    let navClass = [
        classes.NavBar
    ] 
let navItemTypes = ''
let IconArray = []

if(showNavItems){
    navItemTypes = (
        <React.Fragment>
            <NavigationItems />
            <div className={classes.IconContainer}>
                <Icons clicked={props.clicked} color='white' icon='bars' />
            </div>
        </React.Fragment>
    )
}
    if (!showNavItems) {
        navClass = [
            classes.PortFolioNav,
            classes.NavBar
        ].join(' ')
        for (let icon in icons){
    IconArray.push({
        id: icon,
        config: icons[icon]
    })
}
        let allIcons = IconArray.map(myIcon => {
            return <a key={myIcon.id} href={myIcon.config.link} rel="noopener noreferrer" target="_blank">

                <Icons  margin='leftRight' fontSize='mdResponsive' color='white' icon={myIcon.config.icon} />
           </a> 
        })
        navItemTypes = (
           
          
               <div>
               { allIcons}
               </div>
          
        )
    }

    if(scrolled){
        navClass = [
            classes.ScrolledNavBar,
            classes.NavBar
        ].join(' ')
    }

    return(
        <div className={navClass}>
          
            <Logo color='white' size='md' margin='auto' />
            {navItemTypes}
           
        </div>
    )
}




export default NavBar