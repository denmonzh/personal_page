import React, {Component} from 'react'
import './style/style.sass'
import Slide from 'react-reveal/LightSpeed';

import Cart1 from "./carts/Cart1";
import Cart2 from "./carts/Cart2";
import Cart3 from './carts/Cart3'



class Resume extends Component {
    render() {
        return (
            <div className='resume-container'>
                <div className='resume-container__support'>
                    <Slide left>
                        <Cart1/>
                    </Slide>
                    <Slide>
                        <Cart2/>
                    </Slide>
                    <Slide right>
                        <Cart3/>
                    </Slide>
                </div>
            </div>
        );
    }

}

export default Resume;