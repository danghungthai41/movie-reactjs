import {
  FETCH_BOOKING_MOVIE,
  FETCH_CINEMA_LIST,
  FETCH_INFO_SHOWTIME,
  FETCH_SHOWTIME_BY_MOVIE,
  FETCH_CINEMA_BY_CODE
} from "../constants";
let initialState = {
  infoBookingMovie: {},
  cinemaList: [],
  showTimeByMovieList: [],
  infoShowTime: [],
  theaterList: []

  // filterLstDay: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BOOKING_MOVIE:
      state.infoBookingMovie = payload;
      return { ...state };
    case FETCH_CINEMA_LIST:
      state.cinemaList = payload;
      return { ...state };
    case FETCH_CINEMA_BY_CODE:
      state.theaterList = payload;
      return { ...state };
    case FETCH_SHOWTIME_BY_MOVIE:
      state.showTimeByMovieList = payload;
      return { ...state };
    case FETCH_INFO_SHOWTIME:
      state.infoShowTime = payload;
    default:
      return state;
  }
};
export default reducer;
