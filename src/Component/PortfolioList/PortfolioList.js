import React, {useState} from 'react'
import classes from './PortfolioList.module.scss'
import {Row} from 'react-bootstrap'
import ReactMarkdown from "react-markdown";
import Button from '../UI/Button/Button'
import Portfolio from './Portfolio'
import Modal from "../UI/Modal/Modal";
import { useDispatch } from "react-redux";
import * as actionCreators from "../../Store/actions/index";

const PortfolioList = props => {

const [viewMore, setViewMore] = useState(4)


const dispatch = useDispatch();
const [modalTitle, setTitle] = useState("");
const [modalDescription, setDescription] = useState("");
const [modalLink, setLink] = useState("");
const [modalGithubLink, setgithubLink] = useState("");
const [modalFeatures, setFeatures] = useState([]);

const onGetPortfolio = (
  title,
  description,
  portfolioLink,
  features,
  githubLink
) => {
  setTitle(title);
  setDescription(description);
  setLink(portfolioLink);
  setFeatures(features);
  setgithubLink(githubLink);

  dispatch(actionCreators.toggleModal());
};

 const onHideModalAndDrawer = () => {
   dispatch(actionCreators.hideModalAndDrawer());
 };




const showMore =()=>{

let showMore = viewMore+2
  setViewMore(showMore);
}

           let showViewMore;

           if (props.myPortfolios.length > viewMore) {
             showViewMore = (
               <div className={classes.viewMore}>
                 <Button clicked={showMore} color="darkGrey">
                   VIEW MORE...
                 </Button>
               </div>
             );
           }

     let portfolio

        portfolio = props.myPortfolios.slice(0, viewMore).reverse().map((myPortfolio, index) => {
           const {
             title,  
             description,
             features,
             portfolioLink,
             githubLink,
           } = myPortfolio.fields;
          return (
            <Portfolio
              myPortfolio={myPortfolio}
              onClick={() =>
                onGetPortfolio(
                  title,
                  description,
                  portfolioLink,
                  features,
                  githubLink
                )
              }
              key={index}
            />
          );
        });

        let modalF = modalFeatures.map(mp => {
          return(
            <p  >
              <ReactMarkdown source={mp} escapeHtml={false} />
            </p>
          )
          
        })
         


        return (
          <Row className={classes.PortfolioList}>
            <Modal clicked={onHideModalAndDrawer} title={modalTitle}>
              <ReactMarkdown
                className={classes.portfolioContent}
                source={modalDescription}
                escapeHtml={false}
              />
              <h2>Features</h2>
              {modalF}

              <div className={classes.linkButtonDiv}>
                <a href={modalLink} target="_blank" rel="noopener noreferrer">
                  <Button color="darkGrey-outline">View Site</Button>
                </a>

                <a
                  href={modalGithubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button color="darkGrey-outline"> View on github</Button>
                </a>
              </div>
            </Modal>
           
              {portfolio}
           
       
            {showViewMore}
          </Row>
        );
    
}



export default PortfolioList