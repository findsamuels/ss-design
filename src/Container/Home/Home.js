import React, { Component } from 'react'
import classes from './Home.module.scss'
import About from '../../Component/About/About'
import Experience from '../../Component/Experience/Experience'
import Skills from '../../Component/Skills/Skills'
import Contact from '../../Component/Contact/Contact'

import { connect } from 'react-redux'
import * as actionCreators from '../../Store/actions/index'
import Header from '../../Component/Header/Header'
class Home extends Component{
    aboutRef = React.createRef()
    skillRef = React.createRef()
    experienceRef = React.createRef()
    contactRef = React.createRef()

    componentDidMount() {
       
        this.handleScroll()
        this.changeNavItems()
        this.props.onHideModalAndDrawer()
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.onHandleScroll())
    }

    state = {

    }

    handleScroll = () => {
        window.scrollTo(0, 0)

        this.props.onGetRef(this.aboutRef, this.skillRef, this.experienceRef, this.contactRef)
        window.addEventListener('scroll', () => {
            let scrolling = false

            if (window.scrollY !== 0 && scrolling === false) {
                scrolling = true
            }
            else if (window.scrollY === 0 && scrolling === true) {
                scrolling = false
            }
            this.props.onHandleScroll(scrolling)
        })
    }
    changeNavItems = () => {
        let showNavItems = true;

        if (this.props.history.location.pathname === "/") {
            showNavItems = true
        }
        this.props.OnChangeNavItems(showNavItems)
     
    }
    onToggleDrawer = () => {
        this.props.onToggleDrawer()
    }
    render() {


        return (
        
                <div className={classes.Home}>
                <Header clicked={this.onToggleDrawer} />
                <About aboutRef={this.aboutRef} />
                <Experience experienceRef={this.experienceRef} />
                <Skills skillRef={this.skillRef} />
                <Contact contactRef={this.contactRef} />
                </div>
            
        )



    }
}



const mapDispatchToProps = dispatch => {
    return {
        onToggleDrawer: () => dispatch(actionCreators.toggleSideDrawer()),
        onHandleScroll: (scrolling) => dispatch(actionCreators.handleScroll(scrolling)),
        onGetRef: (aboutRef, experienceRef, skillRef, contactRef) => dispatch(actionCreators.componentRefs(aboutRef, experienceRef, skillRef, contactRef)),
        OnChangeNavItems: (showNavItems) => dispatch(actionCreators.showNavItems(showNavItems)),
         onHideModalAndDrawer: () => dispatch(actionCreators.hideModalAndDrawer())
    }
}

export default connect(null, mapDispatchToProps)(Home)