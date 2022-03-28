import { login as initialState } from "../../initialStates";

const login = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        ...state,
        isLoading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case "LOGIN_FAIL":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "LOGIN_CLEANUP":
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

export default login;
