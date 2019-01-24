import React from 'react'
import Card from "@material-ui/core/Card/Card";
import '../style/style.sass'





const Cart1 = ({props})=>(

    <Card className='resume-container__cart'>
        <div className='resume-container__title-container'>
            Education
        </div>
        <div className='resume-container__cart__main-info'>
            <div>
                <span>National Aviation University</span>
                <p>Security system engineering </p>
            </div>
            <div>
                <span>Deutsche IT schulle</span>
                <p>Full Stack Developer </p>
            </div>
            <div>
                <span>English Oxford School </span>
                <p>Pre-Intermediate</p>
            </div>
        </div>
    </Card>

);

export default Cart1;