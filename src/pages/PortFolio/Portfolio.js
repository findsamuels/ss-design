import React, { useEffect } from 'react'

import classes from './Portfolio.module.scss'
import * as actionCreators from '../../Store/actions/index'
import PortfolioList from '../../Component/PortfolioList/PortfolioList'
import Contact from '../../Component/Contact/Contact'
import {useDispatch} from 'react-redux'
const Portfolio = (props) =>  {

    useEffect(()=>{
        changeNavItems()
        window.scrollTo(0,0)
    },[])
   
    const dispatch = useDispatch()


const changeNavItems = () => {
    let showNavItems = true;

    if(props.history.location.pathname === "/portfolio"){
        showNavItems = false
    }
   
    dispatch(actionCreators.showNavItems(showNavItems))
}




        return(
           
                <div className={classes.Portfolio}>
                    <h1>PORTFOLIO</h1>
                    <PortfolioList/>
                    <Contact/>
                </div>
           
        )



    
}


export default Portfolio