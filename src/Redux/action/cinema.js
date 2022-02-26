import createAction from ".";
import request from "../../configs/axios";
import {
  FETCH_BOOKING_MOVIE,
  FETCH_CINEMA_BY_CODE,
  FETCH_CINEMA_LIST,
  FETCH_INFO_SHOWTIME,
  FETCH_SHOWTIME_BY_MOVIE,
} from "../constants";
import { BASE_URL } from "../../configs/baseUrl";
export const fetchBookingMovie = (maPhim) => async (dispatch) => {
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
    dispatch(createAction(FETCH_BOOKING_MOVIE, res.data));
  } catch (err) {
    console.log(err?.response.data);
  }
};

export const fetchCinemaList = async (dispatch) => {
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
    dispatch(createAction(FETCH_CINEMA_LIST, res.data));
  } catch (err) {
    console.log(err.response?.data);
  }
};
export const fetchCinemaByCode = (maHeThongRap) => async (dispatch) => {
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP03`,
      method: "GET",
    });

    dispatch(createAction(FETCH_CINEMA_BY_CODE, res.data));
  } catch (err) {
    console.log(err.response?.data);
  }
};
export const fetchShowTimeByMovie = (maPhim) => async (dispatch) => {
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
    dispatch(createAction(FETCH_SHOWTIME_BY_MOVIE, res.data.heThongRapChieu));
  } catch (err) {
    console.log(err.response?.data);
  }
};
export const fetchInfoShowTime = async (dispatch) => {
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`,
      method: "GET",
    });
    dispatch(createAction(FETCH_INFO_SHOWTIME, res.data));
  } catch (err) {
    console.log(err.reponse?.data);
  }
};
