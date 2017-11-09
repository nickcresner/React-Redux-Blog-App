const INITIAL_STATE = {
    posts: [],
    active: null
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_POST':
            let postsCopy = state.posts.slice();
            postsCopy.push(action.payload);
            return {
                ...state,
                posts: postsCopy,
            };
        case 'EDIT_POST':
            let posts2 = state.posts.slice();
            posts2[state.active] = action.payload;
            return {
                ...state,
                posts: posts2
            }
        case 'SET_ACTIVE':
            return {
                ...state,
                active: action.payload
            };

        default:
            return state;
    }
};