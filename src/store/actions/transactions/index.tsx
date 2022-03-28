import axios from 'axios';
import AxiosCall from '../../../Utils/axios';
import ErrorHandler from '../../../Utils/error-handler';

export const transactionsFetchStart = () => ({
  type: "TRANSACTION_FETCH_START",
});

// updates the initial state if the transactionsFetch is successful
export const transactionsFetchSuccess = (payload: any) => ({
  type: "TRANSACTION_FETCH_SUCCESS",
  payload,
});

// updates the state on transactionsFetch failure
export const transactionsFetchFail = (payload: any) => ({
  type: "TRANSACTION_FETCH_FAIL", // action type
  payload, // action payload
});

// cleans up the state
export const transactionsFetchCleanup = () => ({
  type: "TRANSACTION_FETCH_CLEANUP", // action type
});

export const transactionsFetchAction = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(transactionsFetchStart());
     /**
     * @const requestObj
     * @description contains the request parameters
     */
    const transactionObj = {
      path: 'transactions',
      method: "POST",
      data: payload
    }
    const transaction = await AxiosCall(transactionObj);
    dispatch(transactionsFetchSuccess(transaction));
  } catch (err) { // if error, catch the error and send to the user
    const error = ErrorHandler(err); // the catched error
    dispatch(transactionsFetchFail(error)); // dispatched after transactionsFetch failed
  }
};
