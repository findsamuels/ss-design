import React from 'react'
import classes from './NavigationItems.module.scss'
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => {



    const navItems = {
        
        about: {
            value: 'About',
            path: '/',
            name: 'about'

        },
        experience: {
            value: 'Experience',
            path: '/',
            name: 'experience'

        },
        skills: {
            value: 'Skills',
            path: '/',
            name: 'skills'

        },
       
        
        myWork: {
            value: 'My Work',
            path: "/portfolio",
            name: 'mywork'

        },
       
        contact: {
            value: 'Contact',
            path: '/',
            name: 'contact'

        },

    }

    let navArray = []
    for (let nav in navItems) {
        navArray.push({
            id: nav,
            config: navItems[nav]
        })
    }

    let navs = navArray.map(mynavItem => (
        <NavigationItem names={mynavItem.config.name} clicked={props.clicked} link={mynavItem.config.path} key={mynavItem.id}>{mynavItem.config.value}</NavigationItem>
    ))

    return(
        <ul className={classes.NavigationItems}>
            {navs}
        </ul>
    )
}

export default navigationItems