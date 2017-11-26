import React, {Component} from 'react';
import {Route,NavLink} from 'react-router-dom';
import ContentDetail from './content-detail';

class Content extends Component {
    render(){
        return (
            <div>
                <NavLink className="list-group-item" to="/content/city">City</NavLink>
                <NavLink className="list-group-item" to="/content/sports">Sports</NavLink>
                <Route path="/content/:contentName" component={ContentDetail}></Route>
            </div>
        )
    }
}

export default Content;