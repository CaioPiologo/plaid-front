import AuthTypes from './types';

export const linkRequest = (payload) => ({
  type: AuthTypes.GET_LINK_TOKEN,
  payload,
});

export const loginRequest = (payload) => ({
  type: AuthTypes.LOGIN_REQUEST,
  payload,
});

export const accessRequest = (payload) => ({
  type: AuthTypes.ACCESS_REQUEST,
  payload,
});
