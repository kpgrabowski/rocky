import constants from '../constants'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is a sample reducer or user management. If you remove
	and use your own reducers, remember to update the store
	file (../stores/index.js) with your reducers.
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/



let initialState = {
    all: [],
};

export default (state = initialState, action) => {
    let newState = Object.assign({}, state);

    switch (action.type) {

        case constants.USER_CREATED:
            console.log('USER_CREATED: ' );
            return newState;

        default:
            return state
    }
}