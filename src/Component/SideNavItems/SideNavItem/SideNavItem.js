import React, { Component } from 'react'
import classes from './SideNavItem.module.scss'
import {NavLink} from 'react-router-dom'
import { connect } from 'react-redux'
import * as actionCreators from '../../../Store/actions/index'
class SideNavItem extends Component {

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
    
            this.props.onToggleDrawer()
        

    }
    render(){
        return (
            <li onClick={() => this.scrollToComponent(this.props.names)} className={classes.SideNavItem}>
                <NavLink onClick={this.props.clicked} className={classes.SideNavLink} to={this.props.link}>{this.props.children}</NavLink>
            </li>
        )
    }
   
}

const mapStateToProps = state => {
    return {
        aboutRef: state.uiReducer.aboutRef,
        experienceRef: state.uiReducer.experienceRef,
        skillRef: state.uiReducer.skillRef,
        contactRef: state.uiReducer.contactRef

    }
}

const mapDispatchToProps = dispatch => {
    return {
        onToggleDrawer: () => dispatch(actionCreators.toggleSideDrawer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideNavItem)