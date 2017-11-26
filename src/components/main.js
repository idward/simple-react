import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
// import ReactDOM from 'react-dom';
import Product from '../modules/product/product';
import Home from '../modules/home/home';
import Content from '../modules/content/content';

class Main extends Component {
    render() {
        return (
            <div id="main">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/product" component={Product}/>
                    <Route path="/content" component={Content}/>
                </Switch>
            </div>
        )
    }
}

export default Main;
