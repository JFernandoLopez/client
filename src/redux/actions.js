import { GET_ALL_ROOMS, GET_ALL_USERS, GET_ROOM_BY_ID, GET_USER_BY_IDCARD, CHECK_IN, CHECK_OUT, CREATE_ROOM, CREATE_USER } from "./action-types";
import axios from 'axios';
const endPoint = 'http://localhost:3001'

export const getRooms = () => {
    return async(dispatch) => {
        try {
            const response = (await axios.get(`${endPoint}/rooms`)).data;
            dispatch({ type: GET_ALL_ROOMS, payload: response });
        } catch (error) {
            alert(error.message);
            console.error('Error fetching data:', error);
        };
    };
};

export const getUsers = () => {
    return async(dispatch) => {
        try {
            const response = (await axios.get(`${endPoint}/users`)).data;
            dispatch({ type: GET_ALL_USERS, payload: response });
        } catch (error) {
            alert(error.message);
            console.error('Error fetching data:', error);
        };
    };
};

export const getRoom = (id) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`${endPoint}/rooms/${id}`);
            dispatch({ type: GET_ROOM_BY_ID, payload: response.data });
        } catch (error) {
            alert(error.message);
            console.error('Error fetching data:', error);
        };
    };
};

export const getUser = (idCard) => {
    return async(dispatch) => {
        try {
            const response = await axios.get(`${endPoint}/users/${idCard}`);
            dispatch({ type: GET_USER_BY_IDCARD, payload: response.data });
        } catch (error) {
            alert(error.message);
            console.error('Error fetching data:', error);
        };
    };
};
