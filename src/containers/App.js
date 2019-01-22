import React, {Component} from 'react';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';

import Playground from "../pages/Playground/Playground";
import PlaygroundSlides from "../pages/PlaygroundSlides/PlaygroundSlides";

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Playground}/>
                    <Route exact path="/playground" component={Playground}/>
                    <Route exact path="/playground-slides" component={PlaygroundSlides}/>
                    <Redirect from='*' to='/'/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
