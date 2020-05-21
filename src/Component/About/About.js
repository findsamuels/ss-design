import React from 'react'
import classes from './About.module.scss'

import ContentWrapper from '../UI/ContentWrapper/ContentWrapper'
import LazyLoad from 'react-lazyload'

function about(props) {

    return(
       <LazyLoad once>
            <ContentWrapper >

                <div ref={props.aboutRef} className={classes.About}>
                    <h1 >ABOUT ME</h1>
                    <h4 style={{textAlign: "center", padding: '1rem 0'}}>You can accompish anything if you put your mind to it</h4>
                    <p>
                        Hi my name is Samuel Simon from the Republic of Ireland, I am a self thought Javascript Developer specifically ReactJS, who really enjoy building robost web applications and learning something new. I love challenges because I believe in results no matter how dificult it takes to get it!. </p>

                    <p>Teamwork is very important in any task because we can share our brilliant ideas together so I'll be happy to work within a team to collaborate together for exciting ideas and opportunities.</p>

                    <p>
                        My interests includes Spending time with my family, watching UFC and gaming. I also follow football and my favourite team is proudly Manchester United.   </p>

                    <p> Ps.Looking forward to our meeting </p>

                </div>

            </ContentWrapper>
       </LazyLoad>
            

    )
}



export default about