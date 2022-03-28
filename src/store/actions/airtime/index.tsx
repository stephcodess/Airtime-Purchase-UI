import AxiosCall from '../../../Utils/axios';
import ErrorHandler from '../../../Utils/error-handler';

export const airtimeStart = () => ({
  type: "AIRTIME_VEND_START",
});

// updates the initial state if the airtime is successful
export const airtimeSuccess = (payload: any) => ({
  type: "AIRTIME_VEND_SUCCESS",
  payload,
});

// updates the state on airtime failure
export const airtimeFail = (payload: any) => ({
  type: "AIRTIME_VEND_FAIL", // action type
  payload, // action payload
});

// cleans up the state
export const airtimeCleanup = () => ({
  type: "AIRTIME_VEND_CLEANUP", // action type
});

export const airtimeAction = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(airtimeStart());
     /**
     * @const requestObj
     * @description contains the request parameters
     */
    const requestObj = {
      path: 'vend/airtime', // request url
      method: 'POST', // request method
      data: payload, // action payload
    };

    // the logged in user's data
    const data = await AxiosCall(requestObj);
    // const transactionObj = {
    //   path: 'update-balance',
    //   method: "POST",
    //   data: {
    //     "email": localStorage.getItem("authUser"),
    //     "balance": payload.amount,
    //     "transaction_id": data.details.details.transaction_id
    //   }
    // }
    // const transaction = await AxiosCall(transactionObj);
    console.log(data.details.details.transaction_id);
    dispatch(airtimeSuccess(data));
  } catch (err) { // if error, catch the error and send to the user
    const error = ErrorHandler(err); // the catched error
    dispatch(airtimeFail(error)); // dispatched after airtime failed
  }
};
