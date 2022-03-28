import AxiosCall from '../../../Utils/axios';
import ErrorHandler from '../../../Utils/error-handler';
import { setAuth } from '../auth';

export const loginStart = () => ({
  type: "LOGIN_START",
});

// updates the initial state if the login is successful
export const loginSuccess = (payload: any) => ({
  type: "LOGIN_SUCCESS",
  payload,
});

// updates the state on login failure
export const loginFail = (payload: any) => ({
  type: "LOGIN_FAIL", // action type
  payload, // action payload
});

// cleans up the state
export const loginCleanup = () => ({
  type: "LOGIN_CLEANUP", // action type
});

export const login = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(loginStart());
     /**
     * @const requestObj
     * @description contains the request parameters
     */
    const requestObj = {
      path: 'token', // request url
      method: 'POST', // request method
      data: payload, // action payload
    };

    // the logged in user's data
    const {data} = await AxiosCall(requestObj);
    localStorage.setItem('authToken', data.access_token); // the generated authtoken
    localStorage.setItem("authUser",data.data.email) // the clientId
    dispatch(loginSuccess(data));
    dispatch(setAuth())
  } catch (err) { // if error, catch the error and send to the user
    const error = ErrorHandler(err); // the catched error
    dispatch(loginFail(error)); // dispatched after login failed
  }
};
