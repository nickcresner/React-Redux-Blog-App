import React, { Component } from 'react';
import NewBlogPost from './NewBlogPost';
import BlogPostList from './BlogPostList';
import BlogPostDetail from './BlogPostDetail'

class App extends Component {
    render() {
        return (
            <div>
                <h2>Nick's Redux Blog App</h2>
                <NewBlogPost/>
                <BlogPostList/>
                <BlogPostDetail/>
            </div>
        );
    }
}

export default App;