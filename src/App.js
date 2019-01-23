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


class App extends Component {
    render() {
        return (

            <BrowserRouter>
                <div className='app-container'>
                    <Navigation/>
                    <Switch>
                        <Route path='/' component={Home} exact/>
                        <Route path='/about' component={About}/>
                        <Route path='/resume' component={Resume}/>
                        <Route path='/hobbies' component={Hobbies}/>
                        <Route path='/contact' component={Contact}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
}


export default App;
