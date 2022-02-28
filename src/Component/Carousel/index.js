import React, { useEffect, useMemo, useState } from "react";
import request from "../../configs/axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieList } from "../../Redux/action/movie";
import img from "../../Theme/icons";
import SimpleSlider from "../../HOCS/slider";
import Slider from "react-slick";
import { fetchBookingMovie } from "../../Redux/action/cinema";
import Loader from "../Loading";
import { NavLink } from "react-router-dom";
import moment from "moment";
import useWindowSize from "../../HOCS/useWindowSize";
import BookingMobile from "./BookingMobile";
function Carousel() {
  const dispatch = useDispatch();
  const isMobile = useWindowSize();
  const movieList = useSelector((state) => state.movie.movieList);
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
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };
  useEffect(() => {
    dispatch(fetchMovieList);
  }, []);

  return (
    // style={{background: `url(${img.poster})`}}
    <section className="carousel">
      <Slider className="myCarousel" {...settings}>
        {/* {movieList.map((item, index)=>{
          return index < 6 && <img src={item.hinhAnh} alt={item.tenPhim}/>
        })} */}

        {/* <img src={img.carousel1} alt="banner_1" /> */}
        <img src={img.carousel2} alt="banner_2" />
        <img src={img.carousel3} alt="banner_3" />
        <img src={img.banner_4} alt="banner_4" />
        <img src={img.banner_5} alt="banner_5" />
      </Slider>
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
                      key={movie.maPhim}
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
                            // setopeningDay(
                            //   new Date(
                            //     item.ngayChieuGioChieu
                            //   ).toLocaleDateString()
                            // );
                            setopeningDay(item);
                            setTimeOnScreen("");
                            setOnButton(false);
                          }}
                        >
                          {item}
                          {/* {moment(item.ngayChieuGioChieu).format("DD/MM/YYYY")} */}
                          {/* {new Date(item.ngayChieuGioChieu).toLocaleDateString()} */}
                        </li>
                      );
                    })
                  ) : (
                    // <li className="dropdown-item">Vui lòng chọn phim và rạp</li>
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
                      onButton
                        ? "myCarousel__button active"
                        : "myCarousel__button"
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
  );
}
export default React.memo(Carousel);
