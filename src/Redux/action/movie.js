import createAction from ".";
import request from "../../configs/axios";
import {
  FETCH_MOVIE_LIST_PAGINATION,
  FETCH_MOVIE_LIST,
  FETCH_DETAIL_MOVIE,
  FETCH_MOVIE_LIST_COMING_SOON,
  DISPLAY_LOADING,
  HIDDEN_LOADING,
} from "../constants";

export const fetchMovieListPagination = (params) => async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${params.page}&soPhanTuTrenTrang=${params.pageSize}`,
      method: "GET",
    });
    dispatch(createAction(FETCH_MOVIE_LIST_PAGINATION, res.data));
    dispatch(createAction(HIDDEN_LOADING));
  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING));
    console.log(err.response?.data);
  }
};
export const fetchMovieList = (maNhom="GP09") => async (dispatch) => {
  try {
    const result = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
      method: "GET",
    });
    dispatch(createAction(FETCH_MOVIE_LIST, result.data));
  } catch (err) {
    console.log(err.response?.data);
  }
};

export const fetchMovieListComingSoon = (maNhom) => async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));
  try {
    const { data } = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`,
      method: "GET",
    });
    dispatch(createAction(FETCH_MOVIE_LIST_COMING_SOON, data));
    dispatch(createAction(HIDDEN_LOADING));
  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING));
    console.log(err.response?.data);
  }
};
export const fetchMovieDetail = (id) => async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));

  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    });
    dispatch(createAction(FETCH_DETAIL_MOVIE, res.data));
    dispatch(createAction(HIDDEN_LOADING));
  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING));

    console.log(err.response?.data);
  }
};
