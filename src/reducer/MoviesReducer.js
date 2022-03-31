//Store
export const initialState = {
    loading: '',
    error: '',
    recommendedMovies: [],
    data: [],
};

export const DISPLAY_RECOMMENDED_MOVIES_SUCCESS = 'Display Recommended Movies Success';
export const DISPLAY_RECOMMENDED_MOVIES_FAILURE = 'Display Recommended Movies Failure';

//Reducer
const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_RECOMMENDED_MOVIES_SUCCESS: {
        return {
          ...state,
          recommendedMovies: action.payload,
          data: action.payload
        };
      }
      case DISPLAY_RECOMMENDED_MOVIES_FAILURE: {
        return {
          ...state,
          recommendedMovies: action.error
        };
      }
      default:
        return state;
    }
};

export default moviesReducer;