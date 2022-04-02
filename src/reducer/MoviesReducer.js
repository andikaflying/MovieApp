//Store
export const initialState = {
    loading: '',
    error: '',
    recommendedMovies: [],
    data: [],
    detailMovie: {}
};

export const DISPLAY_RECOMMENDED_MOVIES_SUCCESS = 'Display Recommended Movies Success';
export const DISPLAY_RECOMMENDED_MOVIES_FAILURE = 'Display Recommended Movies Failure';
export const DISPLAY_DETAIL_MOVIE_SUCCESS = 'Display Detail Movie Success';
export const DISPLAY_DETAIL_MOVIE_FAILURE = 'Display Detail Movie Failure';

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
          error: action.error
        };
      }
      case DISPLAY_DETAIL_MOVIE_SUCCESS: {
        return {
          ...state,
          detailMovie: action.payload
        };
      }
      case DISPLAY_DETAIL_MOVIE_FAILURE: {
        return {
          ...state,
          error: action.error
        };
      }
      default:
        return state;
    }
};

export default moviesReducer;