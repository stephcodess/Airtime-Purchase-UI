const token = localStorage.getItem('tokenUser')
const user = localStorage.getItem('authUser')

// login state
export const login = {
    isLoading: false,
    isSuccessful: false,
    data: null,
    error: null,
};

// user state
export const users = {
    isLoading: false,
    isSuccessful: false,
    data: null,
    error: null,
};

// airtimestate
export const airtime = {
  isLoading: false,
  isSuccessful: false,
  data: null,
  error: null,
};

export const electricity = {
  isLoading: false,
  isSuccessful: false,
  data: null,
  error: null,
};

export const signup = {
  isLoading: false,
  isSuccessful: false,
  data: null,
  error: null
}

export const transactions = {
  isLoading: false,
  isSuccessful: false,
  data: null,
  error: null
}

export const auth = {
  token: token || null,
  user: user || null,
  isLoggedIn: token ? true : false,
}