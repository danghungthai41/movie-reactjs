import {
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { IoHome } from "react-icons/io5";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { fetchBookingMovie } from "../../Redux/action/cinema";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "../Loading";

const BookingMobile = () => {
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


  const mergeArr = useMemo(
    () =>
      filterData?.filter(
        (item) =>
          moment(item.ngayChieuGioChieu).format("DD/MM/YYYY") === openingDay &&
          item
      ),
    [filterData]
  );

  const gioChieu = filterData?.map((item) =>
    moment(item.ngayChieuGioChieu).format("HH:MM:SS")
  );

  const selectedItem = useMemo(
    () =>
      mergeArr?.filter(
        (item) =>
          moment(item.ngayChieuGioChieu).format("HH:MM:SS") === timeOnScreen
      ),
    [mergeArr]
  );

  return (
    <>
      <div className="booking-mobile">
        <div className="booking-mobile-container">
          {/* <div className="booking-mobile-item"> */}
          <Typography noWrap gutterBottom align="center" variant="h5">
            Ch???n Phim T???i ????y
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
              <InputLabel htmlFor="my-input">R???p</InputLabel>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                defaultValue="Phim"
                autoComplete="current-password"
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
                  <p className="dropdownItem__title ">Vui l??ng ch???n phim</p>
                )}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="my-input">Ng??y Xem</InputLabel>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                defaultValue="Phim"
                autoComplete="current-password"
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
                    Vui l??ng ch???n phim v?? r???p
                  </p>
                )}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6}>
              <InputLabel htmlFor="my-input">Su???t Chi???u</InputLabel>
              <TextField
                fullWidth
                id="outlined-select-currency"
                select
                defaultValue="Phim"
                autoComplete="current-password"
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
                    Vui l??ng ch???n phim, r???p v?? ng??y chi???u
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
                  MUA V?? NGAY
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
