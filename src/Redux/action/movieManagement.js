import axios from "axios";
import Swal from "sweetalert2";
import createAction from ".";
import { history } from "../../App";
import request from "../../configs/axios";
import { fetchMovieList } from "../action/movie";
import {
  DISPLAY_LOADING,
  FETCH_MOVIE_INFO,
  HIDDEN_LOADING,
} from "../constants";
import moment from "moment";
export const addNewMovie = (formData) => async (dispatch) => {
  try {
    await request({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh",
      method: "POST",
      data: formData,
    });
    Swal.fire({
      title: "Tạo Phim Thành Công",
      icon: "success",
    });
    window.location.href = "/dashboard/films";
  } catch (error) {
    console.log(error.response);
  }
};

export const deleteMovie = (maPhim) => async (dispatch) => {
  try {
    await request({
      url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`,
      method: "DELETE",
    });
    Swal.fire({
      title: "Xóa Phim Thành Công",
      icon: "success",
    });
    dispatch(fetchMovieList("GP09"));
  } catch (error) {
    console.log(error.request?.data);
  }
};

//Call API trong Component
export const fetchMovieInfo = (maPhim) => async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING));
  try {
    await request({
      url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
      method: "GET",
    });
    // await dispatch(createAction(FETCH_MOVIE_INFO, content));
    dispatch(createAction(HIDDEN_LOADING));
  } catch (error) {
    dispatch(createAction(HIDDEN_LOADING));
    console.log(error.response?.data);
  }
};

export const handleUpdateMovieUpload = (movieEdited) => async (dispatch) => {
  console.log({ movieEdited });
  try {
    await request({
      url: "https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhimUpload",
      method: "POST",
      data: movieEdited,
    });
    Swal.fire({
      title: "Cập Nhật Phim Thành Công",
      icon: "success",
      confirmButtonText: "OK",
    }).then((res) => {
      if (res.isConfirmed) {
        window.location.href = "/dashboard/films";
      }
    });
  } catch (error) {
    console.log(error.response?.message);
  }
};
