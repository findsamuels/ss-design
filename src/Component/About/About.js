import React from 'react'
import classes from './About.module.scss'

import ContentWrapper from '../UI/ContentWrapper/ContentWrapper'
function about(props) {

    return(
       
            <ContentWrapper >

                <div ref={props.aboutRef} className={classes.About}>
                    <h1 >ABOUT ME</h1>
                    <h4 style={{textAlign: "center", padding: '1rem 0'}}>You can accomplish anything if you put your mind to it</h4>
                    <p>
                        
                        Hi my name is Samuel Simon from the Republic of Ireland, I am a web application developer with a degree in Computer Science, who really enjoys building robost web applications and learning something new. I love challenges because I believe in results no matter how difficult it takes to get it!. </p><br></br>

                <p>Teamwork is very important in any task because we can share our brilliant ideas together and always looking forward to working within a great team to collaborate together for exciting ideas and opportunities.</p><br></br>

                    <p>
                        My interests includes Spending time with my family, watching UFC and gaming. I also follow football and my favourite team is proudly Manchester United.   </p>

                    <p> Ps.Looking forward to our meeting </p>

                </div>

            </ContentWrapper>
       
            

    )
}



export default about