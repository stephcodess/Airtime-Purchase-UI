import AxiosCall from '../../../Utils/axios';
import ErrorHandler from '../../../Utils/error-handler';

export const UsersStart = () => ({
  type: "USERS_START",
});

// updates the initial state if the airtime is successful
export const UsersSuccess = (payload: any) => ({
  type: "USERS_SUCCESS",
  payload,
});

// updates the state on airtime failure
export const UsersFail = (payload: any) => ({
  type: "USERS_FAIL", // action type
  payload, // action payload
});

// cleans up the state
export const UsersCleanup = () => ({
  type: "USERS_CLEANUP", // action type
});

export const UsersAction = () => async (dispatch: any) => {
  try {
    dispatch(UsersStart());
     /**
     * @const requestObj
     * @description contains the request parameters
     */
    const requestObj = {
      path: 'users', // request url
      method: 'GET', // request method
      data: "", // action payload
    };

    // the logged in user's data
    const data = await AxiosCall(requestObj);
    dispatch(UsersSuccess(data));
  } catch (err) { // if error, catch the error and send to the user
    const error = ErrorHandler(err); // the catched error
    dispatch(UsersFail(error)); // dispatched after Users failed
  }
};

export const loggedInUser = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(UsersStart());
     /**
     * @const requestObj
     * @description contains the request parameters
     */
    const requestObj = {
      path: 'current-user', // request url
      method: 'POST', // request method
      data: payload, // action payload
    };

    // the logged in user's data
    const data = await AxiosCall(requestObj);
    dispatch(UsersSuccess(data));
  } catch (err) { // if error, catch the error and send to the user
    const error = ErrorHandler(err); // the catched error
    dispatch(UsersFail(error)); // dispatched after Users failed
  }
};