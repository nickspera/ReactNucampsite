import * as ActionTypes from './ActionTypes';

export const Comments = (state = { 
                            isLoading: true,
                            errMess: null, 
                            comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            return {...state, isLoading: false, errMess: null, comments: action.payload};
        case ActionTypes.ADD_COMMENTS:
            const comment = action.payload;
            return {...state, isLoading: true, comments: state.comments.concat(comment)};
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload};
        default:
            return state;
    }
};