export const loginInitialState = {
    isLoggedIn: false,
    id: '',
    name: '',
    email: '',
    token: '',
    refreshToken: '',
    tokenExpires: '',
    refreshTokenExpires: '',
};

export const LOGIN = "Login"
export const LOGOUT = "Logout"
export const UPDATE_USER_DATA = "Update user data"

const loginReducer = (state = loginInitialState, action) => {
    switch (action.type) {
      case LOGIN:
        return action.userData;
      case LOGOUT: {
        return {
          isLoggedIn: false,
          id: '',
          nama: '',
          email: '',
          token: '',
          refreshToken: '',
          tokenExpires: '',
          refreshTokenExpires: '',
        }
      }
      case UPDATE_USER_DATA: 
        return action.userData
      default:
        return state;
    }
  };

export default loginReducer;