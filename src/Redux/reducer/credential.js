import { UserInfo } from "../../_core/models/Account";
import { SET_TOKEN, USER_INFO } from "../constants";

let initialState = {
  token: localStorage.getItem("token"),
  userInfo: new UserInfo(),
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_TOKEN: {
      state.token = payload;
      return { ...state };
    }
    case USER_INFO:
      state.userInfo = payload;

      return { ...state };
    default:
      return state;
  }
};
export default reducer;
