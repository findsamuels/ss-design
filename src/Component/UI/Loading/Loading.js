import React from 'react'
import classes from './Loading.module.scss'
const Loading = props => {
    return (
     <div className={classes.Loading}>
            <div className={classes.loader}></div>
     </div>
     
    
    );
}

export default Loading