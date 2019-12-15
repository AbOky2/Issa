import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from './types/actionTypes'

const receiveCurrentUser = user => ({
    type: RECEIVE_CURRENT_USER,
    user
});
const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

export { receiveCurrentUser, LOGOUT_CURRENT_USER }