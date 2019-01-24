import React from 'react'
import Card from "@material-ui/core/Card/Card";
import '../style/style.sass'





const Cart2 = ({props})=>(

    <Card className='resume-container__cart'>
        <div className='resume-container__title-container'>
            Technologies
        </div>
        <div className='resume-container__cart__main-info'>
            <div>
                <p>HTML, CSS, Bootstrap, Material-UI </p>
            </div>
            <div>
                <p> Java Scrip: ES6, jQuery, React, Redux </p>
            </div>
            <div>
                <p>NPM, Grunt, Gulp, Webpack</p>
            </div>
            <div>
                <p>MySQL, PHP, GIT</p>
            </div>
        </div>
    </Card>

);

export default Cart2;