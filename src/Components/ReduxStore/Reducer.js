import { INCREAMENT } from "./Action";

const initialState = {
    users: [
        { name: 'bilal', email: 'bilal@gmail.com' }
    ]
}

const Reducer = (state = initialState) => {
    switch (type) {

        case INCREAMENT:
            return {
                ...state,
                users: users.payload
            }
        default:
            return state
    }
}

export default Reducer;