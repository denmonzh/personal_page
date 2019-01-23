import React from 'react'
import './style/style.sass'
import Zoom from 'react-reveal/Flip';


import fb from './icon/fb.png'
import linkedIn from './icon/in.png'
import inst from './icon/inst.png'
import skype from './icon/skype.png'


const Home = ({props})=>{
  return(
      <div className='home-container'>
          <div className='home-container__support-container'>
              <Zoom top>
                  <div className='home-container__name'>
                      <span>Monzhyevskiy Denys</span>
                  </div>
              </Zoom>
              <div className='home-container__info'>
                    <span>I'm a web developer, use React in personal project, I really like these approach to develop.
                        Let's start read more about me.
                    </span>
              </div>
              <hr/>
              <div className='home-container__social'>
                  <ul>
                      <li>
                          <a href='https://www.facebook.com/profile.php?id=100013637762385'>
                              <img src={fb} alt='facebook'/>
                          </a>
                      </li>
                      <li>
                          <a href='https://www.linkedin.com/in/denys-monzhyevskiy-459314175/'>
                              <img src={linkedIn} alt='linkedIn'/>
                          </a>
                      </li>
                      <li>
                          <a href='https://www.instagram.com/den_monzhyevskiy/'>
                              <img src={inst} alt='Instagram'/>
                          </a>
                      </li>
                      <li>
                          <a href='skype:live:d71c4ce57f0eee50'>
                              <img src={skype} alt='facebook'/>
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
  )
};

export default Home;