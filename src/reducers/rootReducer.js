import { combineReducers } from 'redux';
import BlogFormReducer from './blogFormReducer';
import BlogPostReducer from './BlogPostReducer';


export default combineReducers({
    form: BlogFormReducer,
    posts: BlogPostReducer
});