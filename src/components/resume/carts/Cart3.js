import React from 'react'
import Card from "@material-ui/core/Card/Card";
import '../style/style.sass'





const Cart3 = ({props})=>(

    <Card className='resume-container__cart'>
        <div className='resume-container__title-container'>
            Soft skills
        </div>
        <div className='resume-container__cart__main-info'>
            <div>
                <span>Good Communication skill </span>
            </div>
            <div>
                <span>Teamwork </span>
            </div>
            <div>
                <span>Adaptability </span>
            </div>
            <div>
                <span>Problem-solving</span>
            </div>
            <div>
                <span>Creativity</span>
            </div>
        </div>
    </Card>

);

export default Cart3;