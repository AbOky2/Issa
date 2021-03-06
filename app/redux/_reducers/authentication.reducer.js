import { userConstants } from '../_constants';

const initialState = {
  loggedIn: true,
  user: {},
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };

    case userConstants.AUTH_SOCIAL_REQUEST:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.CHECK_USER_SESSION:
      return {
        loggingIn: true,
        user: action.user,
      };
    case userConstants.AUTH_SOCIAL_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.UPDATE_SUCCESS:
      return {
        loggedIn: true,
        user: action.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {};
    case userConstants.AUTH_SOCIAL_FAILURE:
      return {};
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
};
