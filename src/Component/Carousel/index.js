import React, { useEffect, useMemo, useState } from "react";
import request from "../../configs/axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieList } from "../../Redux/action/movie";
import img from "../../Theme/icons";
import { fetchBookingMovie } from "../../Redux/action/cinema";
import { NavLink } from "react-router-dom";
import moment from "moment";
import useWindowSize from "../../HOCS/useWindowSize";
import { Swiper } from "swiper/react/swiper.js";
import { SwiperSlide } from "swiper/react/swiper-slide.js";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";

import { Navigation } from "swiper";

function Carousel() {
  const dispatch = useDispatch();
  const isMobile = useWindowSize();
  const movieList = useSelector((state) => state.movie.movieList);
  const { isLoading } = useSelector((state) => state.loading);
  const codeCinemaList = useSelector(
    (state) => state.cinema.infoBookingMovie.lichChieu
  );
  const lstCumRap = [
    ...new Set(codeCinemaList?.map((item) => item.thongTinRap.tenCumRap)),
  ];

  const [movieName, setMovieName] = useState("");
  const [cinema, setCinema] = useState("");
  const [openingDay, setopeningDay] = useState("");
  const [timeOnScreen, setTimeOnScreen] = useState("");
  const [onButton, setOnButton] = useState(false);
  const [codeMovie, setCodeMovie] = useState("");

  const filterData = codeCinemaList?.filter((item) => {
    return item.thongTinRap.tenCumRap === cinema && item;
  });
  const ngayChieu = [
    ...new Set(
      filterData?.map((item) =>
        moment(item.ngayChieuGioChieu).format("DD/MM/YYYY")
      )
    ),
  ];
  const mergeArr = filterData?.filter(
    (item) =>
      moment(item.ngayChieuGioChieu).format("DD/MM/YYYY") === openingDay && item
  );
  const gioChieu = filterData?.map((item) =>
    moment(item.ngayChieuGioChieu).format("HH:MM:SS")
  );
  const selectedItem = mergeArr?.filter(
    (item) => moment(item.ngayChieuGioChieu).format("HH:MM:SS") === timeOnScreen
  );

  useEffect(() => {
    dispatch(fetchMovieList("GP09"));
  }, []);

  const imgArr = [
    img.carousel2,
    img.banner_4,
    img.banner_5,
    img.banner_1,
    img.banner_2,
    img.banner_3,
  ];
  return (
    <>
      {isLoading && (
        <div className="loader">
           <img
              src={img.spin}
              alt=""
              className="loading rotating"
            />
        </div>
      )}

      <section className="carousel">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="myCarousel"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {imgArr.map((img, index) => {
            return (
              <SwiperSlide key={index}>
                <div
                  className="carousel__banner"
                  style={{ background: `url(${img}) center center no-repeat` }}
                ></div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="myCarousel__overlay" />
        {isMobile.width > 992 && (
          <div className="myCarousel__booking">
            <div className="myCarousel__cover">
              <div className="myCarousel__item movie">
                <div className="dropdown myCarousel__dropdown">
                  <div
                    className="dropdown-toggle myCarousel__small--icon"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    {movieName ? movieName : <span>Phim</span>}
                  </div>

                  <ul
                    className="dropdown-menu phim"
                    aria-labelledby="dropdownMenuLink"
                  >
                    {movieList?.map((movie) => (
                      <li
                        className="dropdown-item"
                        href="#"
                        key={movie.maPhim}
                        onClick={() => {
                          setMovieName(movie.tenPhim);
                          dispatch(fetchBookingMovie(movie.maPhim));
                          setCinema("");
                          setopeningDay("");
                          setTimeOnScreen("");
                          setOnButton(false);
                          setCodeMovie(movie.maPhim);
                        }}
                      >
                        {movie.tenPhim} (P)
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="myCarousel__item">
                <div className="dropdown myCarousel__dropdown">
                  <div
                    className="dropdown-toggle myCarousel__small--icon"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    {cinema ? cinema : <span>Rạp</span>}
                  </div>

                  <ul
                    className="dropdown-menu cumRap"
                    aria-labelledby="dropdownMenuLink"
                  >
                    {movieName ? (
                      lstCumRap?.map((item, index) => {
                        return (
                          <li
                            className="dropdown-item"
                            href="#"
                            key={index}
                            onClick={() => {
                              setCinema(item);
                              setopeningDay("");
                              setTimeOnScreen("");
                              setOnButton(false);
                            }}
                          >
                            {item}
                          </li>
                        );
                      })
                    ) : (
                      <p className="dropdownItem__title ">Vui lòng chọn phim</p>
                    )}
                  </ul>
                </div>
              </div>
              <div className="myCarousel__item">
                <div className="dropdown myCarousel__dropdown">
                  <div
                    className="dropdown-toggle myCarousel__small--icon"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    {openingDay ? openingDay : <span>Ngày xem</span>}
                  </div>
                  <ul
                    className="dropdown-menu ngayXem"
                    aria-labelledby="dropdownMenuLink"
                  >
                    {cinema ? (
                      ngayChieu?.map((item) => {
                        return (
                          <li
                            className="dropdown-item"
                            href="#"
                            key={item.maLichChieu}
                            onClick={() => {
                              setopeningDay(item);
                              setTimeOnScreen("");
                              setOnButton(false);
                            }}
                          >
                            {item}
                          </li>
                        );
                      })
                    ) : (
                      <p className="dropdownItem__title">
                        Vui lòng chọn phim và rạp
                      </p>
                    )}
                  </ul>
                </div>
              </div>
              <div className="myCarousel__item">
                <div className="dropdown myCarousel__dropdown">
                  <div
                    className="dropdown-toggle myCarousel__small--icon"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-toggle="dropdown"
                  >
                    {timeOnScreen ? timeOnScreen : <span>Suất chiếu</span>}
                  </div>
                  <ul
                    className="dropdown-menu suatChieu"
                    aria-labelledby="dropdownMenuLink"
                  >
                    {openingDay ? (
                      gioChieu?.map((item, index) => {
                        return (
                          <li
                            className="dropdown-item"
                            href="#"
                            key={item.maLichChieu}
                            onClick={() => {
                              setTimeOnScreen(item);
                              setOnButton(true);
                            }}
                          >
                            {item}
                          </li>
                        );
                      })
                    ) : (
                      <p className="dropdownItem__title">
                        Vui lòng chọn phim, rạp và ngày chiếu
                      </p>
                    )}
                  </ul>
                </div>
              </div>
              <div className="myCarousel__item">
                <div className="myCarousel__dropdown">
                  <NavLink
                    to={`/checkout/${
                      selectedItem?.length > 0 && selectedItem[0]?.maLichChieu
                    }`}
                  >
                    <button
                      disabled={!onButton}
                      className={
                        onButton ? "buttonStyle active" : "myCarousel__button"
                      }
                      href="#"
                    >
                      MUA VÉ NGAY
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default React.memo(Carousel);
