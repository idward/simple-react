import React, {Component} from 'react';

import Title from '../../components/header/title';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Hello'
        }

        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle(e) {
        this.setState({title: e.target.value});
    }

    render() {
        return (
            <div id="title">
                <Title title={this.state.title}></Title>
                <input type="text" value={this.state.title} onChange={this.changeTitle}/>
            </div>
        )
    }
}

export default Home;