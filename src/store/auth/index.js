import AuthTypes from './types';

const initialState = {
  hasLink: false,
  error: false,
  isAuthenticated: false,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case AuthTypes.LOGIN_REQUEST:
      return { ...state, error: false };

    case AuthTypes.LOGIN_FAILURE:
      return { ...state, error: true };

    case AuthTypes.GET_LINK_SUCCESS:
      return { ...state, error: false, hasLink: true };

    case AuthTypes.AUTHORIZE:
      return {
        ...state,
        isAuthenticated: true,
      };

    case AuthTypes.UNATHORIZE:
      return {
        ...state,
        isAuthenticated: false,
      };

    default:
      return state;
  }
}
