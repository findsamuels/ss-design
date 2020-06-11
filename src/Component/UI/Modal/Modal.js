import React from 'react'
import ReactDom from 'react-dom'
import classes from './Modal.module.scss'
import Icon from '../Icons/Icons'
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown'
const modal = (props) => {
    let modalClass = classes.Modal


    if(props.showModal){
        modalClass= [
            classes.Modal,
            classes.show
        ].join(' ')
    }




    let modalContent = (
      <div className={modalClass}>
        <div className={classes.TitleBox}>
          <ReactMarkdown className={classes.Title} source={props.title} escapeHtml={false}/>
        
          <div className={classes.ModalIcon}>
            <Icon icon="times" color="darkGrey" clicked={props.clicked} />
          </div>
        </div>
        <div className={classes.Content}>{props.children}</div>
      </div>
    );

    return ReactDom.createPortal(modalContent, document.getElementById('modal-hook'))
}


const mapStateToProps = state => {
    return{
        showModal: state.uiReducer.showModal
    }
}
export default connect(mapStateToProps, null)(modal)