import React from 'react'
import classes from './SideNavItems.module.scss'
import SideNavItem from './SideNavItem/SideNavItem'
import SideDrawer from '../UI/SideDrawer/SideDrawer'

const sideNavItems = (props) => {

   const navItems = {
     about: {
       value: "About",
       path: "/",
       name: "about"
     },
     experience: {
       value: "Experience",
       path: "/",
       name: "experience"
     },
     skills: {
       value: "Skills",
       path: "/",
       name: "skills"
     },

     myWork: {
       value: "My Work",
       path: "/portfolio",
       name: "mywork"
     },
     contact: {
       value: "Contact",
       path: "/",
       name: "contact"
     }
   };

    let navArray = []
    for(let nav in navItems){
        navArray.push({
            id: nav,
            config: navItems[nav]
        })
    }

    let navs = navArray.map(mynavItem => (
        <SideNavItem clicked={props.clicked} names={mynavItem.config.name} link={mynavItem.config.path}  key={mynavItem.id}>{mynavItem.config.value}</SideNavItem>
    ))

    return (
        <SideDrawer clicked={props.clicked} position='right'>
            <ul  className={classes.SideNavItems}>
                {navs}    
               
            </ul>
          
        </SideDrawer>
        
    )
}

export default sideNavItems