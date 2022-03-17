import {
  FormHelperText,
  Grid,
  Input,
  InputLabel,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { IoHome } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { fetchBookingMovie } from "../../Redux/action/cinema";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import img from "../../Theme/icons";

const BookingMobile = () => {
  const [currency, setCurrency] = React.useState("EUR");
  const dispatch = useDispatch();

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
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      {isLoading && (
        <div className="loader">
          <img src={img.spin} alt="" className="loading rotating" />
        </div>
      )}

      <div className="booking-mobile">
        <div className="booking-mobile-container">
          {/* <div className="booking-mobile-item"> */}
          <Typography noWrap gutterBottom align="center" variant="h5">
            Chọn Phim Tại Đây
          </Typography>
          <Grid
            container
            gap={1}
            spacing={2}
            rowSpacing={1}
            columnSpacing={1}
            sx={{ width: "100%", height: "100%" }}
          >
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="my-input">Phim</InputLabel>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                defaultValue="Phim"
                autoComplete="current-password"
                onChange={handleChange}
              >
                {movieList.map((movie) => (
                  <MenuItem
                    key={movie.maPhim}
                    value={movie.tenPhim}
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
                    {movie.tenPhim}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>

            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="my-input">Rạp</InputLabel>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                defaultValue="Phim"
                autoComplete="current-password"
                onChange={handleChange}
              >
                {movieName ? (
                  lstCumRap.map((rap, index) => (
                    <MenuItem
                      key={index}
                      value={rap}
                      onClick={() => {
                        setCinema(rap);
                        setopeningDay("");
                        setTimeOnScreen("");
                        setOnButton(false);
                      }}
                    >
                      {rap}
                    </MenuItem>
                  ))
                ) : (
                  <p className="dropdownItem__title ">Vui lòng chọn phim</p>
                )}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="my-input">Ngày Xem</InputLabel>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                defaultValue="Phim"
                autoComplete="current-password"
                onChange={handleChange}
              >
                {cinema ? (
                  ngayChieu.map((item) => (
                    <MenuItem
                      key={item.maLichChieu}
                      value={item}
                      onClick={() => {
                        setopeningDay(item);
                        setTimeOnScreen("");
                        setOnButton(false);
                      }}
                    >
                      {item}
                    </MenuItem>
                  ))
                ) : (
                  <p className="dropdownItem__title">
                    Vui lòng chọn phim và rạp
                  </p>
                )}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="my-input">Suất Chiếu</InputLabel>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                defaultValue="Phim"
                autoComplete="current-password"
                onChange={handleChange}
              >
                {openingDay ? (
                  gioChieu.map((item, index) => (
                    <MenuItem
                      key={index}
                      value={item}
                      onClick={() => {
                        setTimeOnScreen(item);
                        setOnButton(true);
                      }}
                    >
                      {item}
                    </MenuItem>
                  ))
                ) : (
                  <p className="dropdownItem__title">
                    Vui lòng chọn phim, rạp và ngày chiếu
                  </p>
                )}
              </TextField>
            </Grid>

            {timeOnScreen && (
              <button
                className={`buttonStyle ${
                  timeOnScreen ? "display-button" : ""
                }`}
              >
                <NavLink
                  className="text-white"
                  to={`/checkout/${
                    selectedItem?.length > 0 && selectedItem[0]?.maLichChieu
                  }`}
                >
                  MUA VÉ NGAY
                </NavLink>
              </button>
            )}
          </Grid>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default BookingMobile;
