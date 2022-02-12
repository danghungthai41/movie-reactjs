import createAction from ".";
import request from "../../configs/axios";
import { USER_INFO } from "../constants";

export const fetchInfoAccount = (taiKhoan) => async (dispatch) => {
  try {
    const res = await request({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      method: "POST",
      data: taiKhoan,
    });
    dispatch(createAction(USER_INFO, res.data));
  } catch (err) {
  }
};


