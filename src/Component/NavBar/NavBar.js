import React from 'react'
import classes from './NavBar.module.scss'
import NavigationItems from './NavigationItems/NavigationItems'
import Icons from '../UI/Icons/Icons'
import Logo from '../UI/Logo/Logo'
import {connect} from 'react-redux'
const navBar = (props) => {

    const icons = {
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
    };
        
    let navClass = [
        classes.NavBar
    ] 
let navItemTypes = ''
let IconArray = []

if(props.showNavItems){
    navItemTypes = (
        <React.Fragment>
            <NavigationItems />
            <div className={classes.IconContainer}>
                <Icons clicked={props.clicked} color='white' icon='bars' />
            </div>
        </React.Fragment>
    )
}
    if (!props.showNavItems) {
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

    if(props.scrolled){
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


const mapStateToProps = state => {
    return{
        scrolled: state.uiReducer.scrolled,
        showNavItems: state.uiReducer.showNavItems
    }
}

export default connect(mapStateToProps, null)(navBar)