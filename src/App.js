import React, {Component} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/header';
// import Footer from './components/footer';
import Main from './components/main';

class App extends Component {
    render() {
        return (
            <Router>
                <div id="container" className="row">
                    <div className="col-md-4">
                        <Header></Header>
                    </div>
                    <div className="col-md-8">
                        <Main></Main>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
