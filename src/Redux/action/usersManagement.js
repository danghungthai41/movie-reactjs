import createAction from ".";
import request from "../../configs/axios";
import {FETCH_USERS_LIST} from "../constants";

export const fetchUsersList =
  (maNhom = "GP09") =>
  async (dispatch) => {
    try {
      const { data } = await request({
        url: `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`,
        method: "GET",
      });
      dispatch(createAction(FETCH_USERS_LIST, data));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
