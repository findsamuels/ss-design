import React, { Component } from 'react'
import classes from './Layout.module.scss'
import SideNavItems from '../../Component/SideNavItems/SideNavItems'
import {connect} from 'react-redux'
import * as actionCreators from '../../Store/actions/index'
import BackDrop from '../../Component/UI/BackDrop/BackDrop'
import Footer from '../../Component/Footer/Footer'
import NavBar from '../../Component/NavBar/NavBar'
class Layout extends Component {

    componentDidMount() {
    

    }
    onToggleDrawer = () => {
        this.props.onToggleDrawer()
    }
    onHideModalAndDrawer = () => {
        this.props.onHideModalAndDrawer()
    }

render(){


        return (
            <div className={classes.Layout}>
               
                <BackDrop clicked={this.onHideModalAndDrawer} />
                    <NavBar clicked={this.onToggleDrawer} />
                    <SideNavItems clicked={this.onToggleDrawer} />
               
                    {this.props.children}
              
                <Footer />
            </div>
        )
}
   
}

const mapStateToProps = state => {
    return{

    }
}

const mapDispatchToProps = dispatch => {
    return{
        onToggleDrawer: () => dispatch(actionCreators.toggleSideDrawer()),
        onHideModalAndDrawer: () => dispatch(actionCreators.hideModalAndDrawer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout)