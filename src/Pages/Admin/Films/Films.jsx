import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList } from "../../../Redux/action/movie";
import img from "../../../Theme/icons";
import { NavLink } from "react-router-dom";
import {
  IoTrashOutline,
  IoPencilOutline,
  IoCalendarNumberSharp,
} from "react-icons/io5";
import { deleteMovie } from "../../../Redux/action/movieManagement";
import Swal from "sweetalert2";
import request from "../../../configs/axios";
import createAction from "../../../Redux/action";
import { FETCH_MOVIE_INFO, HIDDEN_LOADING } from "../../../Redux/constants";
import { useHistory } from "react-router-dom";

export default function Films() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { movieList } = useSelector((state) => state.movie);
  const [searchMovie, setSearchMovie] = useState("");
  const [newMovieList, setNewMovieList] = useState();
  useEffect(() => {
    dispatch(fetchMovieList("GP09"));
  }, []);

  useEffect(() => {
    const filterData = movieList.filter((movie) =>
      movie.tenPhim.toLowerCase().includes(searchMovie.toLowerCase())
    );
    setNewMovieList(filterData.reverse());
  }, [searchMovie, movieList]);

  const handleSwitchRoute = async (maPhim) => {
    try {
      const res = await request({
        url: `http://movieapi.cyberlearn.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`,
        method: "GET",
      });
      await dispatch(createAction(FETCH_MOVIE_INFO, res.data.content));
      history.push(`/dashboard/edit/${maPhim}`);
      dispatch(createAction(HIDDEN_LOADING));
    } catch (error) {
      dispatch(createAction(HIDDEN_LOADING));
      console.log(error.response?.data);
    }
  };

  const handleDeleteMovie = (maPhim) => {
    Swal.fire({
      icon: "warning",
      title: "Bạn Chắc Chắn Muốn Xóa Phim",
      showCancelButton: true,
      confirmButtonText: "Đồng Ý",
      cancelButtonText: "Hủy Bỏ",
    }).then((res) => {
      if (res.isConfirmed) {
        dispatch(deleteMovie(maPhim));
      }
    });
  };

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, film) => {
        return (
          <>
            <img
              src={film.hinhAnh ? film.hinhAnh : img.defaultFilm}
              style={{ width: 50, height: 50 }}
              alt=""
            />
          </>
        );
      },
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",

      render: (text, movieName) => (
        <>
          {movieName.tenPhim.length > 20
            ? movieName.tenPhim.substr(0, 30) + "..."
            : movieName.tenPhim}
        </>
      ),

      sorter: (a, b) => {
        let movieA = a.tenPhim.toLowerCase().trim();
        let movieB = b.tenPhim.toLowerCase().trim();
        if (movieA > movieB) return 1;
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },

    {
      title: "Mô Tả",
      dataIndex: "moTa",
      render: (text, desc) => (
        <>
          {desc.moTa.length > 50 ? desc.moTa.substr(0, 50) + "..." : desc.moTa}
        </>
      ),
    },
    {
      title: "Hành Động",
      dataIndex: "hanhDong",
      render: (text, desc) => (
        <p style={{ cursor: "pointer", fontSize: "20px" }}>
          <span
            onClick={() => handleDeleteMovie(desc.maPhim)}
            style={{ color: "#fb4226" }}
          >
            <IoTrashOutline />
          </span>
          <span onClick={() => handleSwitchRoute(desc.maPhim)}>
            <IoPencilOutline />
          </span>
          <span style={{ color: "#3b963b" }} onClick={()=> history.push(`/dashboard/showtime/${desc.maPhim}/${desc.tenPhim}`)}>
            <IoCalendarNumberSharp />
          </span>
        </p>
      ),
    },
  ];
  const data = newMovieList;

  return (
    <div className="p-4">
      <h2>Quản Lý Phim</h2>
      <Input
        className="mb-3"
        placeholder="Tìm Kiếm Phim"
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <NavLink to="/dashboard/addnew">
        <button className="buttonStyle mb-2">Thêm Phim</button>
      </NavLink>
      <Table columns={columns} dataSource={data} />
    </div>
  );
}
