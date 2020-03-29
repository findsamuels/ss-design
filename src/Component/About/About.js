import React from 'react'
import classes from './About.module.scss'
import ContentWrapper from '../UI/ContentWrapper/ContentWrapper'

const about = (props) => {

    

    return(
       
            <ContentWrapper >
               
            <div ref={props.aboutRef} className={classes.About}>
                    <h1 >ABOUT ME</h1>
                        <p>
                        My name is Samuel Simon from the republic of Ireland, I am a self thought Javascript Developer specifically ReactJS, I really enjoy building robost web applications. I love challenges because I believe in results no matter how dificult it takes to get it!. </p>
                            
                            <p>Teamwork is very important which is my other strength so I'll be happy to work within a team to collaborate together for exciting ideas and opportunities.</p>

                        <p>
                            My interests includes UFC, I watch this every week and i am also currently an active mixed martial artist!. I also follow football and my favourite team is proudly Manchester United! </p>
                    
                </div>

        </ContentWrapper>

    )
}

export default about