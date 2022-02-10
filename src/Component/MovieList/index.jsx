import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchMovieList } from "../../../Redux/action/movie";
import { withStyles } from "@material-ui/core";
import styles from "./style";
import MovieItem from "../MovieItem";
import { fetchMovieListPagination } from "../../Redux/action/movie";
import Pagination from "@material-ui/lab/Pagination";
import { fetchCinemaList } from "../../Redux/action/cinema";
import Slider from "react-slick";
import img from "../../Theme/icons";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const MovieList = (props) => {
  const dispatch = useDispatch();
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesToScroll: 4,
    infinite: true,
    speed: 400,
    // slidesToShow: 1,
    // draggable: true,
    // rows: 2,
    // slidesPerRow: 4,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  const movieListNow = useSelector((state) => state.movie.movieList);
  const [typeOfTitle, setTypeOfTitle] = useState("now");
  useEffect(() => {
    dispatch(fetchCinemaList);
  }, []);

  const viewMovieList = (nav) => {
    switch (nav) {
      case "now":
        return movieListNow?.map((item) => {
          return <MovieItem key={item.maPhim} movie={item} />;
        });
      case "future":
        return <fMovieList></fMovieList>;
      default:
        break;
    }
  };

  // const [a, setA] = useState({
  //   page: 1,
  //   pageSize: 8,
  // });
  // const handleChangePage = (event, page) => {
  //   this.props.dispatch(
  //     fetchMovieListPagination({
  //       page: page,
  //       pageSize: a.pageSize,
  //     })
  //   );
  //   setA({
  //     page,
  //   });
  // };
  const renderMovieList = () => {
    return movieListNow?.map((item) => {
      return <MovieItem key={item.maPhim} movie={item} />;
    });
  };
  return (
    <div className="movieList" id="lichChieu">
      <div class="movieList__cover">
        <ul className="nav nav-tabs " role="tablist">
          <li
            className="nav-item active"
            onClick={() => setTypeOfTitle("now")}
            role="presentation"
          >
            Lịch Chiếu
          </li>
          {/* <li className="nav-item" role="presentation">
          <a
            className="nav-link"
            data-toggle="tab"
            role="tab"
            onClick={() => setTable("infoMovie")}
          >
            Thông Tin
          </a>
        </li> */}
          <li
            className="nav-item"
            onClick={() => setTypeOfTitle("future")}
            role="presentation"
          >
            Sắp Chiếu
          </li>
        </ul>

        <Slider {...settings} className="row">
          {/* <div class="col-3"> */}

          {/* <div className="row"> */}

          {/* </div> */}
          {renderMovieList()}
          {/* {movieList?.map((item) => {
            return <MovieItem key={item.maPhim} movie={item} />;
          })} */}
        </Slider>
        {/* </div> */}
      </div>
    </div>
  );
};
// componentDidMount() {
//   this.props.dispatch(fetchMovieListPagination(this.state));
// }

export default MovieList;
