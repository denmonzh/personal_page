import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.sass'

import Navigation from './components/navigation/index'
import Home from "./components/home";
import About from "./components/about";
import Resume from "./components/resume";
import Hobbies from "./components/hobbies";
import Contact from "./components/contact";
import Error from "./components/error";


const urlImage = 'http://samsung-wallpapers.com/uploads/allimg/130603/1-130603011311.jpg';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loadingImage: null,
            loading: false
        }
    }

    componentDidMount() {

        const image = new Image();
        image.src = urlImage;
        image.onload = () => {
            this.setState({loading: true});
            this.loadingImage.setAttribute(
                'style', `background: url('${urlImage}') center center no-repeat`
            );
        }

    }


    render() {

        const {loading} = this.state;

        return (
            <div>
                {
                    loading === true ? (
                        <BrowserRouter>
                            <div
                                className='app-container'
                                ref={imageLoadedElem => this.loadingImage = imageLoadedElem}
                            >
                                <Navigation/>
                                <Switch>
                                    <Route path='/' component={Home} exact/>
                                    <Route path='/personal_page' component={Home} exact/>
                                    <Route path='/about' component={About}/>
                                    <Route path='/resume' component={Resume}/>
                                    <Route path='/hobbies' component={Hobbies}/>
                                    <Route path='/contact' component={Contact}/>
                                    <Route component={Error}/>
                                </Switch>
                            </div>
                        </BrowserRouter>
                    ):
                        (
                            <div>
                                Loading...
                            </div>
                        )
                }
            </div>

        );
    }
}


export default App;
