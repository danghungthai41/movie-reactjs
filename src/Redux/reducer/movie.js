import {
  FETCH_MOVIE_LIST_PAGINATION,
  FETCH_MOVIE_LIST,
  FETCH_DETAIL_MOVIE,
  PUSH_SELECTED_MOVIE,
  FETCH_MOVIE_LIST_COMING_SOON,
} from "../constants";

let initialState = {
  movieListPag: {},
  movieList: [],
  movieDetail: {},
  selectedMovie: null,
  movieListComingSoon: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MOVIE_LIST_PAGINATION:
      state.movieListPag = payload;
      return { ...state };
    case FETCH_MOVIE_LIST:
      state.movieList = payload;
      return { ...state };
    case FETCH_DETAIL_MOVIE:
      state.movieDetail = payload;
      return { ...state };
    case PUSH_SELECTED_MOVIE:
      state.selectedMovie = payload;
      return { ...state };
    case FETCH_MOVIE_LIST_COMING_SOON:
      return { ...state, movieListComingSoon: payload };
    default:
      return state;
  }
};
export default reducer;
