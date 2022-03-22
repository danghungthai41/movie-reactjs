import createAction from ".";
import request from "../../configs/axios";
import {
  DISPLAY_LOADING,
  FETCH_BOOKING_MOVIE,
  FETCH_CINEMA_BY_CODE,
  FETCH_CINEMA_LIST,
  FETCH_INFO_SHOWTIME,
  FETCH_SHOWTIME_BY_MOVIE,
  HIDDEN_LOADING,
} from "../constants";
import { BASE_URL } from "../../configs/baseUrl";
export const fetchBookingMovie = (maPhim) => async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
    await dispatch(createAction(FETCH_BOOKING_MOVIE, res.data));
    dispatch(createAction(HIDDEN_LOADING));
  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING));

    console.log(err?.response.data);
  }
};

export const fetchCinemaList = async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));

  try {
    const { data } = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
      method: "GET",
    });
    dispatch(createAction(FETCH_CINEMA_LIST, data));
    dispatch(createAction(HIDDEN_LOADING));
  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING));

    console.log(err.response?.data);
  }
};
export const fetchCinemaByCode = (maHeThongRap) => async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));

  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
      method: "GET",
    });

    await dispatch(createAction(FETCH_CINEMA_BY_CODE, res.data));
    dispatch(createAction(HIDDEN_LOADING));
  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING));

    console.log(err.response?.data);
  }
};
export const fetchShowTimeByMovie = (maPhim) => async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));

  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
    await dispatch(
      createAction(FETCH_SHOWTIME_BY_MOVIE, res.data.heThongRapChieu)
    );
    dispatch(createAction(HIDDEN_LOADING));
  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING));

    console.log(err.response?.data);
  }
};
export const fetchInfoShowTime = async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));

  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP09`,
      method: "GET",
    });
    await dispatch(createAction(FETCH_INFO_SHOWTIME, res.data));
    dispatch(createAction(HIDDEN_LOADING));
  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING));

    console.log(err.reponse?.data);
  }
};
