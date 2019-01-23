import React from 'react'
import './style/style.sass'

import fb from './icon/fb.png'
import linkedIn from './icon/in.png'
import inst from './icon/inst.png'
import email from './icon/email.png'
import skype from './icon/skype.png'


const Home = ({props})=>{
  return(
      <div className='home-container'>
          <div className='home-container__support-container'>
              <div className='home-container__name'>
                  <span>Monzhyevskiy Denys</span>
              </div>
              <div className='home-container__info'>
                    <span>I'm a web developer, use React in personal project, I really like these approach to develop.
                        Let's start read more about me.
                    </span>
              </div>
              <hr/>
              <div className='home-container__social'>
                  <ul>
                      <li>
                          <a href='/'>
                              <img src={fb} alt='facebook'/>
                          </a>
                      </li>
                      <li>
                          <a href='/'>
                              <img src={linkedIn} alt='facebook'/>
                          </a>
                      </li>
                      <li>
                          <a href='/'>
                              <img src={inst} alt='facebook'/>
                          </a>
                      </li>
                      <li>
                          <a href='/'>
                              <img src={email} alt='facebook'/>
                          </a>
                      </li>
                      <li>
                          <a href='/'>
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