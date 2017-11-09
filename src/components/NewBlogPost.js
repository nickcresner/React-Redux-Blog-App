import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewBlogPost extends Component {
    constructor(props) {
        super(props);
    }

    changeTitle = (event) => {
        this.props.dispatch({
            type: 'UPDATE_TITLE',
            payload: event.target.value
        })
    };

    changeContent = (event) => {
        this.props.dispatch({
            type: 'UPDATE_CONTENT',
            payload: event.target.value
        })
    };

    submitForm = (event) => {
        let { dispatch } = this.props;
        event.preventDefault();
        dispatch(this.submitAction());
        dispatch({
            type: 'RESET_FORM'
        })
    };


    submitAction = () => {
        let { editing, content, title} = this.props;
        let payload = {
            title: title,
            content: content
        };
        if (editing) {
            return {
                type: 'EDIT_POST',
                payload: payload,
            }
        } else {
            return {
                type: 'ADD_POST',
                payload: payload,
            }
        }
    }

    render() {
        let { title, content, editing } = this.props;
        return (
            <div className="new-post-form row">
                <h3>New Blog Post</h3>
                <div className="col-lg-4">
                    <form
                        onSubmit={this.submitForm}
                    >
                        <div className="form-group">
                            <label>Post title</label>
                            <br/>
                            <textarea type="text"
                                      placeholder="Title of your post"
                                      value={title}
                                      onChange={this.changeTitle}
                                      cols="100"
                                      rows="3"/>
                        </div>

                        <div className="form-group">
                            <label>Post content</label>
                            <br/>
                            <textarea value={content}
                                      placeholder="Blog post content"
                                      onChange={this.changeContent}
                                      cols="100"
                                      rows="8"/>
                        </div>

                        <button type="submit">
                            { !editing ? `ADD POST` : `OK`}
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        title: state.form.title,
        content: state.form.content,
        editing: state.form.editing,
    }
};


export default connect(mapStateToProps)(NewBlogPost);
