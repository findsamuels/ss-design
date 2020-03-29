import React from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import classes from './Skills.module.scss'
import ContentWrapper from '../UI/ContentWrapper/ContentWrapper'

const skills = (props) => {

    const skillContent = {
      frontEnd1: {
        skill: ["Javascript", "Html5", "CSS3", "Bootstrap"],
        className: "SkillList1",
        title: "Front End 1"
      },

      Complimentary: {
        skill: ["Npm", "Git", "Firebase", "Debugging", "SCSS", "Node Js"],
        title: "Complimentary",
        className: "SkillList2"
      },

      frontEnd2: {
        skill: ["React Js", "Redux", "React Hooks", "Vuejs","CSS-Modules"],
        title: "Front End 2",
        className: "SkillList3"
      }
    };

        let SkillsArray = []
    for (let skill in skillContent){
        SkillsArray.push({
            id: skill,
            content: skillContent[skill]
        })
   
    }

    

   let newSkillArray = SkillsArray.map(skill => {  
    
       let mySkillList = skill.content.skill  
       let listedSkill= mySkillList.map(listSkill => (     
           < ListGroup.Item as='li' key={listSkill}>
               {listSkill}</ListGroup.Item >
             
        ))
     
        return(
            <Col key={skill.id} className={classes.SkillList}>
                <ListGroup variant="flush" className={classes.lists} as='ul'>
                    
                    <ListGroup.Item className={classes.ListTitle}  >
                        <h3>{skill.content.title}</h3>
                    </ListGroup.Item >
                    
                        {listedSkill}
                   
                </ListGroup>
            

            </Col>
        )
    })

    
    return(
     <ContentWrapper>
            <div className={classes.Skills}>
                <h1 ref={props.skillRef}>Skills</h1>
                <Row>
                    {newSkillArray}
                </Row>

            </div>
     </ContentWrapper>
           
            
      
    )
}


export default skills