import React, {Component} from 'react';

class ContentDetail extends Component {
    render(){
        console.log(this.props);
        return (
            <div>
                {this.props.match.params.contentName}
            </div>
        )
    }
}

export default ContentDetail;