const INITIAL_STATE = {
    title:'',
    content: '',
    editing: false,
};

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'UPDATE_TITLE':
            return {
                ...state,
                title: action.payload
            }
        case 'UPDATE_CONTENT':
            return {
                ...state,
                content: action.payload
            }
        case 'POPULATE_FORM':
            return {
                ...state,
                editing: true,
                title: action.payload.title,
                content: action.payload.content
            }
        case 'RESET_FORM':
            return INITIAL_STATE;
        default:
            return state;
    }
};