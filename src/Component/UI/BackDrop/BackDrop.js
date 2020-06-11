import React from 'react'
import ReactDom from 'react-dom'
import { connect } from 'react-redux'
import classes from './BackDrop.module.scss'

const backDrop = (props) => {

    let backDropClass = [classes.BackDrop]
    if(props.showDrawer){
        backDropClass = [
            classes.BackDrop,
            classes.showDrawerBackdrop
        ].join(' ')
    }

    if (props.showModal) {
        backDropClass = [
            classes.BackDrop,
            classes.showModalBackdrop
        ].join(' ')
    }

    let backdropContent = (
<div onClick={props.clicked} className={backDropClass}></div>
    )

    return ReactDom.createPortal(backdropContent, document.getElementById('backdrop-hook'))
}

const mapStateToProps = state => {
    return {
        showDrawer: state.uiReducer.showDrawer,
           showModal: state.uiReducer.showModal
    }
}


export default connect(mapStateToProps, null)(backDrop)