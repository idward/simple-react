import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import {NavLink} from 'react-router-dom';
import '../App.css';

class Header extends Component {
    // handleTitle(e){
    //     this.props.changeTitle(e.target.value);
    // }

    render() {
        // setTimeout(()=> {
        //     ReactDOM.render(<Title title="CCC"/>,document.getElementById('title'));
        // }, 2000)
        return (
            <div className="list-group">
                <NavLink exact className="list-group-item" activeClassName="active" to="/">Home</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/product">Product</NavLink>
                <NavLink className="list-group-item" activeClassName="active" to="/content">Content</NavLink>
            </div>
        )
    }
}

export default Header;
