import AxiosCall from '../../../Utils/axios';
import ErrorHandler from '../../../Utils/error-handler';

export const electricityStart = () => ({
  type: "ElECTRICITY_VEND_START",
});

// updates the initial state if the airtime is successful
export const electricitySuccess = (payload: any) => ({
  type: "ElECTRICITY_VEND_SUCCESS",
  payload,
});

// updates the state on airtime failure
export const electricityFail = (payload: any) => ({
  type: "ElECTRICITY_VEND_FAIL", // action type
  payload, // action payload
});

// cleans up the state
export const electricityCleanup = () => ({
  type: "ElECTRICITY_VEND_CLEANUP", // action type
});

export const electricityAction = (payload: any) => async (dispatch: any) => {
  try {
    dispatch(electricityStart());
     /**
     * @const requestObj
     * @description contains the request parameters
     */
    const requestObj = {
      path: 'validate-electricity', // request url
      method: 'POST', // request method
      data: {
        "meter_number": payload.meter_number,
        "meter_type": payload.meter_type,
        "amount": payload.amount,
        "service": payload.service
      }, // action payload
    };
    // the logged in user's data
    const data = await AxiosCall(requestObj);

    const electricityObj = {
      path: 'purchase-electricity', // request url
      method: 'POST', // request method
      data: {
        "productCode": data.productCode,
        "productToken": data.productToken,
        "phone": payload.phone
      }, // action payload
    };
    const transaction = await AxiosCall(electricityObj);
    dispatch(electricitySuccess(transaction));
  } catch (err) { // if error, catch the error and send to the user
    const error = ErrorHandler(err); // the catched error
    dispatch(electricityFail(error)); // dispatched after electricity failed
  }
};
