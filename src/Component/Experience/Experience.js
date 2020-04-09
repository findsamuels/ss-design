import React from 'react'
import classes from './Experience.module.scss'
import Icon from '../UI/Icons/Icons'
import {Row, Col} from 'react-bootstrap'
import LazyLoad from 'react-lazyload'
import ContentWrapper from '../UI/ContentWrapper/ContentWrapper'

const experience = (props) => {

    let experience = {

        irelandWebsiteDesign:{
            date: 'Jan 2016 - Nov 2016',
            employerName: 'Ireland Website Design',
            location: 'Unit 6 Cross Roads Business Park',
            icon: 'laptop-code',
            role: 'Junior Web Developer',
            duty1: 'Successfully completed websites development projects individually and as part of a team.Used tools like Teamwork to organise and coordinate tasks',
            duty2: 'Used software’s like Joomla and WordPress to create beautiful websites.Using multiple IT Systems to complete tasks effectively'
        },
        emeraldContactCenter: {
            date: 'Nov 2019 - Present',
            employerName: 'Emerald Contact Center',
            location: 'Waterford Business Park, Waterford Ireland',
            
            icon: 'hands-helping',
            role: 'Customer Solutions Specialist ',
            duty1: 'Maintaining high level call resolution and quality Assurance, Assisting customer with sales on promotion and setting up account, Informing customers of promotions and opportunities',
            duty2: 'Understanding customer needs and giving customer great offers, Consistence and using the right call flow'
        },
        eishtec: {
            date: 'Nov 2016 - Nov 2019',
            employerName: 'Eishtec/EE',
            location: 'Unit 2 Cleaboy Business Park, Waterford Oreland',
            role: 'Technical Support and Sales Advisor',
            icon: 'headset',
            duty1: 'Worked as both Technical support and Sales Advisor. Solved technical issues with Networks, mobile, and Tablets. ',
            duty2: 'Closing sales by Renewing customers contracts and setting them up with new contracts, Setting a target every month and reaching them, Resolved all queries quickly and efficiently'
        }
    }

    let experienceArray = []
    for(let experiences in experience){
        experienceArray.push({
            id: experiences,
            config: experience[experiences]
        })
    }

    let experienceContainer = experienceArray.map(exp => (
        <Row key={exp.id} className={classes.ExperienceList}>
            <Col md='4' className={classes.Date}>
                <h3> {exp.config.date}</h3>
                <div className={classes.ExperienceIcon}>
                    <Icon icon={exp.config.icon} color='darkBlue'></Icon>
                </div>
               
                </Col>
            <Col md='8' className={classes.experienceBox}>
                <div className={classes.ExperienceHeader}>
                    <h3>{exp.config.employerName}</h3>
                    <h4>{exp.config.location}</h4>
                    <h5>{exp.config.role}</h5></div>
                
                <p>{exp.config.duty1}</p>
                <p>{exp.config.duty2}</p>
            </Col>
        </Row>
    ))


    return(
        <LazyLoad>
            <ContentWrapper backgroundColor='darkBlue'>
                <div className={classes.Experience}>

                    <div className={classes.ExperienceBox} >
                        <h1 ref={props.experienceRef}>EXPERIENCE</h1>
                    </div>


                    {experienceContainer}
                </div>
            </ContentWrapper>
        </LazyLoad>
        
            
            

    )
} 

export default experience