import React from 'react'
import classes from './Portfolio.module.scss'
import Fade from 'react-reveal/Fade'
import {Card, Col} from 'react-bootstrap'
import Button from '../UI/Button/Button'
import ReactMarkdown from 'react-markdown'

const Portfolio =  props => {
     const {
       title,
       portfolioImage
     } = props.myPortfolio.fields

        const showPortfolio = (
          <Col className={classes.portfolios} key={title} md="6">
            <Fade>
              <Card key={props.index} className={classes.PortfolioItems}>
                <div className={classes.imageOverLay}>
                  <Card.Img
                    onClick={props.onClick}
                    className={classes.Img}
                    variant="top"
                    alt={title}
                    src={
                      portfolioImage.fields.file.url }
                  />
                </div>
                <Card.Body className={classes.TitleDiv}>
                  <Button
                    color="darkGrey"
                    btnType="block"
                    clicked={props.onClick}
                  >
                    <ReactMarkdown source={title} escapeHtml={false} />
                  </Button>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        );


  return showPortfolio
 
};

export default Portfolio