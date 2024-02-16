import { GET_ALL_ROOMS, GET_ALL_USERS, GET_ROOM_BY_ID, GET_USER_BY_IDCARD, CHECK_IN, CHECK_OUT, CREATE_ROOM, CREATE_USER } from "./action-types";

const initialState = {
    rooms: [],
    users: [],
    user: {},
    room: {}
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_ROOMS:
            return {
                ...state,
                rooms: action.payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case GET_ROOM_BY_ID:
            return {
                ...state,
                room: action.payload
            }
        case GET_USER_BY_IDCARD:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default reducer;