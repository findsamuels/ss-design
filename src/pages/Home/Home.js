import React, {useEffect, useRef } from 'react'
import classes from './Home.module.scss'
import About from '../../Component/About/About'
import Experience from '../../Component/Experience/Experience'
import Skills from '../../Component/Skills/Skills'
import Contact from '../../Component/Contact/Contact'
import Footer from '../../Component/Footer/Footer'

import { useDispatch } from 'react-redux'
import * as actionCreators from '../../Store/actions/index'
import Header from '../../Component/Header/Header'

function Home(props) {
    const aboutRef = useRef()
   const skillRef = useRef()
    const experienceRef = useRef()
    const contactRef = useRef()

    const dispatch = useDispatch()



   

    useEffect(() => {
        handleScroll()
        changeNavItems()
        dispatch(actionCreators.hideModalAndDrawer())
        dispatch(actionCreators.componentRefs(aboutRef, skillRef, experienceRef, contactRef))


    }, [])

    useEffect(() => {

        return()=>{
            window.removeEventListener('scroll', dispatch(actionCreators.handleScroll()))
        }
    })
    

   const handleScroll = () => {
        window.scrollTo(0, 0)

        window.addEventListener('scroll', () => {
            let scrolling = false

            if (window.scrollY !== 0 && scrolling === false) {
                scrolling = true
            }
            else if (window.scrollY === 0 && scrolling === true) {
                scrolling = false
            }
            dispatch(actionCreators.handleScroll(scrolling))
        })
    }
    const changeNavItems = () => {
        let showNavItems = true;

        if (props.history.location.pathname === "/") {
            showNavItems = true
        }
        dispatch(actionCreators.showNavItems(showNavItems))
     
    }
    const onToggleDrawer = () => {
        dispatch(actionCreators.toggleSideDrawer())
    }
 


        return (
          <div className={classes.Home}>
              <Header clicked={onToggleDrawer} />
              {" "}
              <About aboutRef={aboutRef} />

              <Experience experienceRef={experienceRef} />
              {" "}
              <Skills skillRef={skillRef} />

              <Contact contactRef={contactRef} />
              <Footer/>
            
          </div>
        );



    
}





export default Home