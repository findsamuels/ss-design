import React, {Component} from 'react'
import classes from './NavigationItem.module.scss'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
class NavigationItem extends Component {

    scrollToComponent = (name) => {
 switch (name) {
      case 'about':
        this.props.aboutRef.current.scrollIntoView()
        
        break;
     case 'experience':
         this.props.skillRef.current.scrollIntoView()
        break;
     case 'skills':
         this.props.experienceRef.current.scrollIntoView({
             bahaviour: 'smooth'
         })
        break;
     case 'contact':
         this.props.contactRef.current.scrollIntoView()
         break;

      default:
        window.scrollTo(0, 0)
    }
     
        
    }

render(){
    return (
        <li onClick={() => this.scrollToComponent(this.props.names)} className={classes.NavigationItem}>
            <NavLink className={classes.NavigationLink} to={this.props.link} exact={this.props.exact} >{this.props.children}</NavLink>
        </li>
    )
}
   
}
const mapStateToProps = state => {
    return{
        aboutRef: state.uiReducer.aboutRef,
        experienceRef: state.uiReducer.experienceRef,
        skillRef: state.uiReducer.skillRef,
        contactRef: state.uiReducer.contactRef
       
    }
}

export default connect(mapStateToProps, null)(NavigationItem)