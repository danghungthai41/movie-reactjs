import createAction from ".";
import request from "../../configs/axios";
import { DISPLAY_LOADING, HIDDEN_LOADING, USER_INFO } from "../constants";

export const fetchInfoAccount = () => async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));

  try {
    const { data } = await request({
      url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    await dispatch(createAction(USER_INFO, data.content));
    dispatch(createAction(HIDDEN_LOADING));
  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING));

    console.log(err.response?.data);
  }
};
