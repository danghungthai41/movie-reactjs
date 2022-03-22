import { FETCH_USERS_LIST } from "../constants";

const initialState = {
  usersList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USERS_LIST:
      return { ...state, usersList: payload };
    default:
      return state;
  }
};

export default reducer;
