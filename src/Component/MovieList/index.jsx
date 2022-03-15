import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { fetchMovieList } from "../../../Redux/action/movie";
import { withStyles } from "@material-ui/core";
import styles from "./style";
import MovieItem from "../MovieItem";
import { fetchMovieListPagination } from "../../Redux/action/movie";
// import Pagination from "@material-ui/lab/Pagination";
import { fetchCinemaList } from "../../Redux/action/cinema";
import Slider from "react-slick";
import img from "../../Theme/icons";

import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/modules/grid/grid.scss";
import "swiper/modules/pagination/pagination.scss";

// import "./style.css";

// import required modules
import { Grid, Navigation, Pagination } from "swiper";
const MovieList = (props) => {
  const dispatch = useDispatch();

  const movieListNow = useSelector((state) => state.movie.movieList);
  const [typeOfTitle, setTypeOfTitle] = useState("now");
  useEffect(() => {
    dispatch(fetchCinemaList);
  }, []);

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
          <li
            className="nav-item"
            onClick={() => setTypeOfTitle("future")}
            role="presentation"
          >
            Sắp Chiếu
          </li>
        </ul>

        <Swiper
          slidesPerView={4}
          slidesPerGroup={4}
          loop={true}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          modules={[Navigation, Grid]}
          navigation={true}
          className="mySwiper"
          breakpoints={{
            // when window width is >= 640px
            100: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            // when window width is >= 768px
            700: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            992: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
            1250: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
        >
          {movieListNow?.map((item) => (
            <SwiperSlide key={item.maPhim}>
              <MovieItem movie={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
