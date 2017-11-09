import React, { Component } from 'react';
import { connect } from 'react-redux';
import BlogPost from './BlogPost';

class BlogPostList extends Component {
    constructor(props) {
        super(props);
    }

    renderPosts = () => {
        return this.props.posts.map((item, i) => {
            return <BlogPost title={item.title}
                             i={i}
                             key={i} />

        })
    };

    render() {
        return (
            <ul>
                {this.renderPosts() }
            </ul>
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts
    }
};

export default connect(mapStateToProps)(BlogPostList)