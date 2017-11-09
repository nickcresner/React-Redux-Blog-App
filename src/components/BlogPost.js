import React, { Component } from 'react';
import { connect } from 'react-redux';

class BlogPost extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        let { i } = this.props;
        this.props.dispatch({
            type: 'SET_ACTIVE',
            payload: i
        })
    };

    render() {
        let { title, active, i, done } = this.props;
        return (
            <li style={{ color: active === i ? 'dodgerBlue' : 'black'}}
                onClick={this.handleClick}>
                {title}
            </li>
        )
    }
}

const mapStateToProps = state => {
    return {
        active: state.posts.active
    }
};

export default connect(mapStateToProps)(BlogPost);

