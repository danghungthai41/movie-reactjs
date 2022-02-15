import createAction from ".";
import request from "../../configs/axios";
import { USER_INFO } from "../constants";

export const fetchInfoAccount = () => async (dispatch) => {
  try {
    const { data } = await request({
      url: "http://movieapi.cyberlearn.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    dispatch(createAction(USER_INFO, data.content));
  } catch (err) {
    console.log(err);
  }
};
