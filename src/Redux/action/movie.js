import createAction from ".";
import request from "../../configs/axios";
import { FETCH_MOVIE_LIST_PAGINATION, FETCH_MOVIE_LIST, FETCH_DETAIL_MOVIE } from "../constants";

export const fetchMovieListPagination = (params) => async (dispatch) => {
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhimPhanTrang?maNhom=GP09&soTrang=${params.page}&soPhanTuTrenTrang=${params.pageSize}`,
      method: "GET",
    });
    dispatch(createAction(FETCH_MOVIE_LIST_PAGINATION, res.data));
  } catch (err) {
    console.log(err);
  }
};
export const fetchMovieList = async (dispatch) => {
  try {
    const result = await request({
      url:
        "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP09",
      method: "GET",
    });
    dispatch(createAction(FETCH_MOVIE_LIST, result.data));
  } catch (err) {
    console.log(err.response?.data);
  }
};

export const fetchMovieDetail = (id) => async (dispatch) => {
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`,
      method: "GET",
    })
    dispatch(createAction(FETCH_DETAIL_MOVIE, res.data));
  } catch (err) {
    console.log(err.response?.data);
  }
};
