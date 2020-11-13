import { INCREMENT } from "./Action";

const initialState = {
    users: [
        { name: 'bilal', email: 'bilal@gmail.com' }
    ]
}

const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case INCREMENT:
            return {
                ...state,
            }
        default:
            return state
    }
}

export default Reducer;
