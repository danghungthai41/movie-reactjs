import { DISPLAY_LOADING, HIDDEN_LOADING } from "../constants/index";
const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case DISPLAY_LOADING:
      return { ...state, isLoading: true };
    case HIDDEN_LOADING:
      return { ...state, isLoading: false };
    default:
      return state;
  }
};

export default reducer;
