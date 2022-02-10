import { DISPLAY_LOADING, HIDDEN_LOADING } from "../constants/index";
const initialState = {
  isLoading: false,
};

const reducer = (state = initialState, { type }) => {
  switch (type) {
    case DISPLAY_LOADING:
      state.isLoading = true;
      return { ...state };
    case HIDDEN_LOADING:
      state.isLoading = false;

      return { ...state };
    default:
      return {...state}
  }
};

export default reducer;
