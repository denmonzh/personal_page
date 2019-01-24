import React from 'react'
import './style/style.sass'
import Avatar from '@material-ui/core/Avatar';

import avatar from './image/avatar.jpg'

const About = ({props})=>{
  return(
      <div className='about-container'>
          <div className='about-container__support'>
            <div>
                <Avatar src={avatar} alt='avatar'/>
            </div>
          </div>

      </div>
  )
};

export default About;