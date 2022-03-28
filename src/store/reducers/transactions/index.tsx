import { transactions as initialState } from "../../initialStates";

const transactions = (state = initialState, action: any) => {
  switch (action.type) {
    case "TRANSACTION_FETCH_START":
      return {
        ...state,
        isLoading: true,
      };
    case "TRANSACTION_FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case "TRANSACTION_FETCH_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "TRANSACTION_FETCH_CLEANUP":
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

export default transactions;
