import React, { Component } from 'react';
import { connect } from 'react-redux';

class BlogPostDetail extends Component {
    constructor(props) {
        super(props);
    }

    renderPostDetail = () => {
        let { posts, active, item } = this.props;
        let post;
        let i;
        posts.map((item, i) => {
            if (i === active) {
                post = item;
            }
        });
        return (
            <div>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </div>
        )
    }

    editPost = () => {
        let { posts, active } = this.props;
        this.props.dispatch({
            type: 'POPULATE_FORM',
            payload: posts[active]
        })
    }

    render() {
        let { active } = this.props;
        if (active === null) {
            return <div>Click a blog post</div>
        } else {
            return (
                <div>
                    {this.renderPostDetail()}
                    <button
                        onClick={this.editPost}
                    >Edit</button>
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts.posts,
        active: state.posts.active
    }
}
export default connect(mapStateToProps)(BlogPostDetail)