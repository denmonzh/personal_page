import React from 'react'
import './style/style.sass'
import Button from '@material-ui/core/Button';
import Fade from 'react-reveal/Fade';


import resume from '../../resume/Resume.pdf'


import avatar from './image/avatar.jpg'

const About = ({props})=>{
  return(
      <div className='about-container'>
          <div className='about-container__support'>
              <Fade top>
                  <img className='about-container__avatar' src={avatar} alt='avatar'/>
              </Fade>

              <span className='about-container__text'>I’m a nice fun and friendly person, I’m honest and punctual,
                I work well in a team but also on my own as I like to set myself goals which I will achieve,
                I have good listening and communication skills.
                I have a creative mind and am always up for new challenges.
              </span>

              <Fade bottom>
                  <form method='get' action={resume} className='about-container__download'>
                      <Button variant="contained" color="primary" type='submit'>
                          Download Resume
                      </Button>
                  </form>
              </Fade>
          </div>

      </div>
  )
};

export default About;