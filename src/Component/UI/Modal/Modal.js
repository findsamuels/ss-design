import React from 'react'
import classes from './Modal.module.scss'
import Icon from '../Icons/Icons'
import { connect } from 'react-redux'
const modal = (props) => {
    let modalClass = classes.Modal


    if(props.showModal){
        modalClass= [
            classes.Modal,
            classes.show
        ].join(' ')
    }


    return(
        <div className={modalClass}>
    <div className={classes.TitleBox}>
    <h5 className={classes.Title}>{props.title}</h5>
    <div className={classes.ModalIcon}>
                    <Icon icon='times' color='darkGrey'  clicked={props.clicked} />
    </div>
    
    </div>
            <div className={classes.Content}>{props.children}</div>
</div>
    )
}


const mapStateToProps = state => {
    return{
        showModal: state.uiReducer.showModal
    }
}
export default connect(mapStateToProps, null)(modal)