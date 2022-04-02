import { electricity as initialState } from "../../initialStates";

const electricity = (state = initialState, action: any) => {
  switch (action.type) {
    case "ELECTRICITY_VEND_START":
      return {
        ...state,
        isLoading: true,
      };
    case "ELECTRICITY_VEND_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case "ELECTRICITY_VEND_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "ELECTRICITY_VEND_CLEANUP":
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

export default electricity;
