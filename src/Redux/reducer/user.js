import { ADD_USER } from "../constants";

let initialState = {
  maLoaiNguoiDung: "",
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_USER:
      state.maLoaiNguoiDung = payload;
      return { ...state };
    default:
      return state;
  }
};
export default reducer;
