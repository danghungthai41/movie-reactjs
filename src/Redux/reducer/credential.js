import { SET_TOKEN, USER_INFO } from "../constants";

let initialState = {
  token: "",
  userInfo: {
    taiKhoan: "",
    hoTen: "",
    email: "",
    

  },
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