import React, {Component} from 'react'
import classes from './PortfolioList.module.scss'
import {Row, Col, Card} from 'react-bootstrap'
import Modal from '../UI/Modal/Modal'
import {connect} from 'react-redux'
import LazyLoad from 'react-lazyload'
import ContentWrapper from '../../Component/UI/ContentWrapper/ContentWrapper'
import Button from '../UI/Button/Button'
import * as actionCreators from '../../Store/actions/index'
class PortfolioList extends Component {


    state = {


        portfolioList: {
            burgerBuilder: {
                img: "../img/burger.png",
                title: 'Burger Builder',
                description: 'This was the first application I built whilst learning React. It is a simple burger buiding app that allows visitors to register, build a simple burger and place an order.',
                alt: 'burger-builder',
                features: ['Reactjs, Redux, Auth, Firebase, Css-Modules, Scss'],
                link: 'https://vueproject-aa050.firebaseapp.com/',
                
            },
       
            fsSchedule: {
                img: "../img/fss.png",
                title: 'Fs-Schedule',
                description: 'To Do React application that requires user authentication before they can add a new task. Added tasks are saved in a database and available when user logs in next. Users can Add, View, Delete, Edit.',
                alt: 'fsSchedule',
                features: ['Reactjs, Redux, Auth, Firebase, Css-Modules, Scss'],
                link: 'https://fs-schedule.firebaseapp.com/',
                
            },
            Mya: {
                img: "../img/solking.png",
                title: 'King Solomon',
                description: 'Great website currently in production for a talented MMA Fighter based in waterford, His love for mix martial arts comes from the mental challenge it brings, the daily grind of understanding and pushing past your perceived limit',
                alt: 'solKing',
                features: ['Vuejs, Vuex, NodeJs, Express, Scss'],
                link: '#',
               
                        }
        },

        
            title: '',
            description: '',
            link: '',
            features: '',
            previewButton: false,

        

    }


    onGetPortfolio = (title, description, link, features)=> {

        this.setState({
            title: title,
            description: description,
            link: link,
            features: features
        })

        this.props.onToggleModal()
    }
    onToggleModal = () => {
        this.props.onToggleModal()
    }

    onHideModalAndDrawer = () => {
        this.props.onHideModalAndDrawer()
    }

    mouseEnterImage = () => {

        this.setState({
            previewButton: true
        })
    }
    mouseLeaveImage = () => {

        this.setState({
            previewButton: false
        })
    }

    render(){
        let previewButtons = ''
        let portfolioArray = []
        for (let portfolios in this.state.portfolioList) {
            portfolioArray.push({
                id: portfolios,
                config: this.state.portfolioList[portfolios]
            })
        }

        let myPortfolios = portfolioArray.map(myPortfolio => {

        
            previewButtons = <Button color='darkBlue-outline' clicked={() => this.onGetPortfolio(myPortfolio.config.title, myPortfolio.config.description, myPortfolio.config.link)} >Preview Site</Button> 
            
            return (

                <LazyLoad >
                    <Col key={myPortfolio.id} md='4' >


                        <Card className={classes.PortfolioItems}>

                            <div onMouseEnter={this.mouseEnterImage} onMouseLeave={this.mouseLeaveImage} className={classes.imageOverLay}>

                                <Card.Img onClick={() => this.onGetPortfolio(myPortfolio.config.title, myPortfolio.config.description, myPortfolio.config.link, myPortfolio.config.features)} className={classes.Img} variant='top' alt={myPortfolio.config.alt} src={myPortfolio.config.img} />

                            </div>
                            <Card.Body className={classes.TitleDiv}>

                                <Button color='darkBlue' btnType='block' clicked={() => this.onGetPortfolio(myPortfolio.config.title, myPortfolio.config.description, myPortfolio.config.link, myPortfolio.config.features)} >{myPortfolio.config.title}</Button>

                            </Card.Body>






                        </Card>
                    </Col>
                </LazyLoad>
               
            )



        })

        return (
            <ContentWrapper>
                <Row className={classes.PortfolioList}>
                    <Modal clicked={this.onHideModalAndDrawer} title={this.state.title}>
                        <p className={classes.portfolioContent}>{this.state.description}</p>
                        <p className={classes.portfolioContent}>Features Includes: {this.state.features}</p>
                        <a href={this.state.link} target='_blank' rel='noopener noreferrer'>
                            <Button color='darkBlue-outline' >View Site</Button>
                        </a>

                    </Modal>
                    {myPortfolios}
                </Row>
            </ContentWrapper>
           
        )
    }



}

const mapDispatchToProps = dispatch => {
    return{
        onToggleModal: () => dispatch(actionCreators.toggleModal()),
        onHideModalAndDrawer: () => dispatch(actionCreators.hideModalAndDrawer())
    }
}

export default connect(null, mapDispatchToProps)(PortfolioList)