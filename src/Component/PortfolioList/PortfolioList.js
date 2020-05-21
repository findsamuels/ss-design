import React, {Component, useState} from 'react'
import classes from './PortfolioList.module.scss'
import {Row, Col, Card} from 'react-bootstrap'
import Modal from '../UI/Modal/Modal'
import {useDispatch} from 'react-redux'
import LazyLoad from 'react-lazyload'
import burgerImg from '../../../src/assets/img/burger.jpg'
import fssimg from '../../../src/assets/img/taskbig.jpg'
import solImg from '../../../src/assets/img/solking.jpg'
import sshop from '../../../src/assets/img/ssshop.jpg'
import ContentWrapper from '../../Component/UI/ContentWrapper/ContentWrapper'
import Button from '../UI/Button/Button'
import * as actionCreators from '../../Store/actions/index'
const PortfolioList = () => {

const dispatch = useDispatch()

const [portfolioList, setPortFolioList] = useState({
   


    ssshop: {
        img: sshop,
        title: 'SS SHOP',
        description: 'Ecommerce shopping cart website built with reusability and functionality in mind. I enjoyed building this template because it gave me the opportunity to learn alot more and apply them into this application.', 
        description2: 'The website has diferent functionality including selecting items to buy, previewing the item, adding to cart and user login with multiple components connecting together perfectly',
        alt: 'ss shop',
        features: ['Reactjs, React-Redux, Firebase, React-Hooks, Scss, Redux Hooks etc'],
        link: 'https://ss-shops.firebaseapp.com/',
        github: 'https://github.com/findsamuels/ss-shop'

    },
        burgerBuilder: {
        img: burgerImg,
            title: 'Burger Builder',
            description: 'This was the first application I built whilst learning React. It is a simple burger buiding app that allows visitors to register, build a simple burger and place an order.',
            alt: 'burger-builder',
            features: ['Reactjs, Redux, Auth, Firebase, Css-Modules, Scss'],
            link: 'https://vueproject-aa050.firebaseapp.com/',
            github: 'https://github.com/findsamuels/myBurger'
        },

        fsSchedule: {
            img: fssimg,
            title: 'Fs-Schedule',
            description: 'To Do React application that requires user authentication before they can add a new task. Added tasks are saved in a database and available when user logs in next. Users can Add, View, Delete, Edit.',
            alt: 'fsSchedule',
            features: ['Reactjs, Redux, Auth, Firebase, Css-Modules, Scss'],
            link: 'https://fs-schedule.firebaseapp.com/',
            github: 'https://github.com/findsamuels/fs-schedule'
        },
        Mya: {
            img: solImg,
            title: 'King Solomon',
            description: 'Great website currently in production for a talented MMA Fighter based in waterford, His love for mix martial arts comes from the mental challenge it brings, the daily grind of understanding and pushing past your perceived limit',
            alt: 'solKing',
            features: ['Vuejs, Vuex, NodeJs, Express, Scss'],
            link: '#',

        }
})

const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [description2, setDescription2] = useState('')
    const [link, setLink] = useState('')
    const [githubLink, setgithubLink] = useState('')
    const [features, setFeatures] = useState('')
    const [previewButton, setPreviewButton] = useState(false)




    const onGetPortfolio = (title, description, description2, link, features, github)=> {

        setTitle(title)
        setDescription(description)
        setDescription2(description2)
        setLink(link)
        setFeatures(features)
        setgithubLink(github)
        
      

        dispatch(actionCreators.toggleModal())
    }
    const onToggleModal = () => {
        dispatch(actionCreators.toggleModal())
    }

    const  onHideModalAndDrawer = () => {
        dispatch(actionCreators.hideModalAndDrawer())
    }

    const mouseEnterImage = () => {

       setPreviewButton(true)
    }
    const mouseLeaveImage = () => {

        setPreviewButton(false)
    }


        let previewButtons = ''
        let portfolioArray = []
        for (let portfolios in portfolioList) {
            portfolioArray.push({
                id: portfolios,
                config: portfolioList[portfolios]
            })
        }

        let myPortfolios = portfolioArray.map(myPortfolio => {

        
            previewButtons = <Button color='darkGrey-outline' clicked={() => onGetPortfolio(myPortfolio.config.title, myPortfolio.config.description, myPortfolio.config.description2, myPortfolio.config.link, myPortfolio.config.features, myPortfolio.config.github)} >Preview Site</Button> 
           
            return (

                <LazyLoad >

                    
                    <Col className={classes.portfolios} key={myPortfolio.id} md='6' >


                        <Card className={classes.PortfolioItems}>

                            <div onMouseEnter={mouseEnterImage} onMouseLeave={mouseLeaveImage} className={classes.imageOverLay}>

                                <Card.Img onClick={() => onGetPortfolio(myPortfolio.config.title, myPortfolio.config.description, myPortfolio.config.description2, myPortfolio.config.link, myPortfolio.config.features, myPortfolio.config.github)} className={classes.Img} variant='top' alt={myPortfolio.config.alt} src={myPortfolio.config.img} />

                            </div>
                            <Card.Body className={classes.TitleDiv}>

                                <Button color='darkGrey' btnType='block' clicked={() => onGetPortfolio(myPortfolio.config.title, myPortfolio.config.description, myPortfolio.config.description2, myPortfolio.config.link, myPortfolio.config.features, myPortfolio.config.github)} >{myPortfolio.config.title}</Button>

                            </Card.Body>






                        </Card>
                    </Col>
                </LazyLoad>
               
            )



        })

        return (
           
                <Row className={classes.PortfolioList}>
                    <Modal clicked={onHideModalAndDrawer} title={title}>
                        <p className={classes.portfolioContent}>{description}</p>
                        <p className={classes.portfolioContent}>{description2}</p>
                        <p className={classes.portfolioContent}>Features Includes: {features}</p>
                        <Row>
                            <Col md='6'>
                                <a href={link} target='_blank' rel='noopener noreferrer'>
                                    <Button color='darkGrey-outline' >View Site</Button>
                                </a>
                            </Col>
                            <Col md='6'>
                                <a href={githubLink} target='_blank' rel='noopener noreferrer'>

                                    <Button color='darkGrey-outline' > View on github</Button>
                                </a>
                            </Col>
                        </Row>
                     
                        
                       

                    </Modal>
                    {myPortfolios}
                </Row>
       
           
        )
    



}



export default PortfolioList