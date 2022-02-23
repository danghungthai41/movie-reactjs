import { Table } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieList } from "../../../Redux/action/movie";
import img from "../../../Theme/icons";
import { NavLink } from "react-router-dom";
import { IoTrashOutline, IoPencilOutline } from "react-icons/io5";
const { Search } = Input;

export default function Films() {
  const dispatch = useDispatch();
  const onSearch = (value) => console.log(value);
  const { movieList } = useSelector((state) => state.movie);
  const [searchMovie, setSearchMovie] = useState("");
  const [newMovieList, setNewMovieList] = useState();

  useEffect(() => {
    dispatch(fetchMovieList);
  }, []);

  useEffect(() => {
    const filterData = movieList.filter((movie) =>
      movie.tenPhim.toLowerCase().includes(searchMovie.toLowerCase())
    );
    setNewMovieList(filterData);
    // console.log(filterData);
  }, [searchMovie, movieList]);

  const onChange = (pagination, filters, sorter, extra) => {
    // console.log("params", pagination, filters, sorter, extra);
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
        console.log(film.hinhAnh === false);
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
        <>
          <NavLink to="" style={{ color: "#fb4226" }}>
            <IoTrashOutline />
          </NavLink>
          <NavLink to="">
            <IoPencilOutline />
          </NavLink>
        </>
      ),
    },
  ];
  const data = newMovieList;

  return (
    <div>
      <h2>Quản Lý Phim</h2>
      <Search
        className="mb-3"
        placeholder="Search Films"
        // onSearch={onSearch}
        enterButton
        onChange={(e) => setSearchMovie(e.target.value)}
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
