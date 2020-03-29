import React, { Component } from 'react'

import classes from './Portfolio.module.scss'
import * as actionCreators from '../../Store/actions/index'
import PortfolioList from '../../Component/PortfolioList/PortfolioList'
import Contact from '../../Component/Contact/Contact'
import {connect} from 'react-redux'
class Portfolio extends Component {
    componentDidMount() {
    
        this.changeNavItems()
    }

state = {

}

changeNavItems = () => {
    let showNavItems = true;

    if(this.props.history.location.pathname === "/portfolio"){
        showNavItems = false
    }
    this.props.OnChangeNavItems(showNavItems)
   
}

    render(){


        return(
           
                <div className={classes.Portfolio}>
                    <h1>PORTFOLIO</h1>
                    <PortfolioList/>
                    <Contact/>
                </div>
           
        )



    }
}



const mapDispatchToProps = dispatch => {
    return {
        OnChangeNavItems: (showNavItems) => dispatch(actionCreators.showNavItems(showNavItems))
    }
}

export default connect(null, mapDispatchToProps)(Portfolio)