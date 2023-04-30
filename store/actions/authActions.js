import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';
import axios from 'axios';
import { baseURL } from '../api/apiService';

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const loginSuccess = (accessToken, refreshToken, user) => {
  return (dispatch) => {
    dispatch({
      type: LOGIN_SUCCESS,
      payload: { accessToken, refreshToken, user }
    });

    // Access accessToken and user properties
    console.log("Access Token:", accessToken);
    console.log("User:", user);
  };
};


export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: error
  };
};

export const login = (username, password) => {
  return async (dispatch) => {
    dispatch(loginRequest());

    try {
      const response = await axios.post(`${baseURL}authentication/token/`, {
        username: username,
        password: password
      });

      const { access, refresh } = response.data;

      const user = {
        accessToken: access,
        refreshToken: refresh,
      };

      dispatch(loginSuccess(access, refresh, user));
      return user;
    } catch (error) {
      dispatch(loginFailure(error));
    }
  };
};
