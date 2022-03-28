import { airtime as initialState } from "../../initialStates";

const airtime = (state = initialState, action: any) => {
  switch (action.type) {
    case "AIRTIME_VEND_START":
      return {
        ...state,
        isLoading: true,
      };
    case "AIRTIME_VEND_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case "AIRTIME_VEND_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "AIRTIME_VEND_CLEANUP":
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null,
      };
    default:
      return state;
  }
};

export default airtime;
