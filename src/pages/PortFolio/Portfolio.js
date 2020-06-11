import React, { useState, useEffect } from 'react'
import classes from './Portfolio.module.scss'
import Footer from '../../Component/Footer/Footer'
import * as actionCreators from '../../Store/actions/index'
import PortfolioList from '../../Component/PortfolioList/PortfolioList'
import Contact from '../../Component/Contact/Contact'
import { contentfulClient } from '../../Clients/Clients'
import Loading from '../../Component/UI/Loading/Loading'

import {useDispatch} from 'react-redux'
const Portfolio = (props) =>  {

    useEffect(()=>{
        changeNavItems()
        window.scrollTo(0,0)
    },[])

  const [loading, setLoading] = useState(false)
  const [myPortfolios, setMyPortfolios] = useState([])
  const [err, setErr] = useState(false)
  useEffect(() => {
    setLoading(true);
    contentfulClient.getEntries()
      .then(res => {
        setMyPortfolios(res.items)
        setLoading(false)
       
      })
      .catch(err => {
        setErr(true)
        setLoading(false);
      })

  }, [])
  console.log(myPortfolios);
   
    const dispatch = useDispatch()


const changeNavItems = () => {
    let showNavItems = true;

    if(props.history.location.pathname === "/portfolio"){
        showNavItems = false
    }
   
    dispatch(actionCreators.showNavItems(showNavItems))
}

  let portfolio;
  if (loading) {
    
    portfolio = <div className={classes.portfolioList}>
      <div className={classes.loading}>
        <Loading /> 
      </div>
   
    </div>
  }
  if(!loading && err){
    portfolio =
      <div className={[classes.centerError, classes.portfolioList ].join(' ')}>
      <p >Could not load content, please check your connection</p>
      </div>
    
  }
  else{
    portfolio = 
      <div className={classes.portfolioList}>
      <PortfolioList myPortfolios={myPortfolios} />
      </div>

  
  }


        return (
          <div className={classes.Portfolio}>
            {portfolio}
            
             
          

           <div className={classes.footerContent}>
              <Contact />
              <Footer />
           </div>
              
          </div>
        );



    
}


export default Portfolio