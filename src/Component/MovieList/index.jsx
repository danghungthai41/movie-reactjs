import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../MovieItem";
import { fetchCinemaList } from "../../Redux/action/cinema";

import { Swiper } from "swiper/react/swiper";
import { SwiperSlide } from "swiper/react/swiper-slide";
import "swiper/swiper.scss";
import "swiper/modules/grid/grid.scss";
import "swiper/modules/pagination/pagination.scss";

import { Grid, Navigation } from "swiper";
import { fetchMovieListComingSoon } from "../../Redux/action/movie";
const MovieList = () => {
  const dispatch = useDispatch();

  const movieListNow = useSelector((state) => state.movie.movieList);
  const movieListComingSoon = useSelector(
    (state) => state.movie.movieListComingSoon
  );
  const [typeOfTitle, setTypeOfTitle] = useState("Lịch Chiếu");
  useEffect(() => {
    dispatch(fetchCinemaList);
    dispatch(fetchMovieListComingSoon("GP06"));
  }, []);

  const renderMovieListByNav = (nav) => {
    switch (nav) {
      case "Lịch Chiếu":
        return movieListNow?.map((item,index) => (
          <SwiperSlide key={index}>
            <MovieItem movie={item} />
          </SwiperSlide>
        ));

      case "Sắp Chiếu":
        return movieListComingSoon?.map((item, index) => (
          <SwiperSlide key={index}>
            <MovieItem movie={item} />
          </SwiperSlide>
        ));

      default:
        break;
    }
  };

  return (
    <div className="movieList" id="lichChieu">
      <div class="movieList__cover">
        <ul className="nav nav-tabs " role="tablist">
          {["Lịch Chiếu", "Sắp Chiếu"].map((item) => (
            <li
              className={`nav-item ${typeOfTitle === item ? "active" : ""} `}
              onClick={() => setTypeOfTitle(item)}
              role="presentation"
              key={item}
            >
              {item}
            </li>
          ))}
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
            100: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
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
          {/* Render MovieList By State (NOW/ COMING SOON) */}
          {renderMovieListByNav(typeOfTitle)}
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
