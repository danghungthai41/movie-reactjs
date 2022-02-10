import { Star } from "@material-ui/icons";
import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../Theme/icons";
import Dialog from "@material-ui/core/Dialog";
import { IoPlay } from "react-icons/io5";

import {
  IoEyeSharp,
  IoStar,
  IoReorderFour,
  IoPlayCircleSharp,
} from "react-icons/io5";

export default function MovieDetail(props) {
  const { movieDetail } = props;

  const getThoiLuong = () => {
    if (props.movieDetail.lichChieu) {
      const thoiLuongArr = movieDetail.lichChieu.map((item) => item.thoiLuong);
      const thoiLuong = new Set(thoiLuongArr);
      console.log(thoiLuong);
      return thoiLuong;
    }
    return 100;
  };
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const countingStar = (danhGia) => {
    if (danhGia >= 9) {
      return 5;
    } else if (danhGia >= 7) {
      return 4;
    } else if (danhGia >= 5) {
      return 3;
    } else if (danhGia >= 3) {
      return 2;
    } else if (danhGia >= 0) {
      return 1;
    }
  };
  const RenderStar = (countingStar) => {
    const arrStar = [];
    for (let index = 0; index < countingStar; index++) {
      arrStar.push(
        <Star autocomplete />
        // <img src={img.star} alt="anh" className="img-fluid star_number" />
      );
    }
    return arrStar;
  };
  return (
    <div
      className="movieDetail__top"
      style={{ backgroundImage: `url(${img.bgImg})` }}
      // style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
    >
      <div className="movieDetail__overlay"></div>
      {/* <h2 className="movieDetail__title ">THÔNG TIN PHIM</h2> */}

      <div className="movieDetail__cover row">
        <div className="col-md-12 col-lg-5">
          <div
            className="movieDetail__infoMovie" // style={{ backgroundImage: `url(${movieDetail.hinhAnh})` }}
          >
            {/* <p>
              {new Date(movieDetail.ngayKhoiChieu).toLocaleDateString("en-GB")}
            </p> */}
            <p>{movieDetail.tenPhim}</p>
            <p>
              Thời Lương: {getThoiLuong()} phút - {movieDetail.danhGia} IMDb -
              2D/Digital
            </p>
            <div className="movieDetail__typography mb-4">
              <div className="col-4">
                <IoEyeSharp />
                <p>3005</p>
              </div>
              <div className="col-4">
                <IoStar />
                <p>269</p>
              </div>
              <div className="col-4">
                <IoReorderFour />
                <p>269</p>
              </div>
            </div>
            <p className="m-0">Nhà sản xuất: Mike Tyson</p>
            <p className="m-0">Quốc gia: Mỹ</p>
            <p className="mb-2">Thể loại: Hành động</p>
            Nội Dung
            <p> {movieDetail.moTa}</p>
            <button className="buttonStyle w-25 mr-3">
              <a href="#lichChieuChiTiet">Mua Vé</a>
            </button>
          </div>
        </div>
        <div className="col-md-12 col-lg-5" style={{ height: "500px" }}>
          <div className="movieDetail__img">
            <img
              src={img.xoay}
              alt=""
              className="movieDeatail__imgRotate rotating"
            />
            <img
              src={movieDetail?.hinhAnh}
              alt=""
              className="movieDeatail__imgMovie"
            />
            <div
              className="overlay"
              style={{
                zIndex: 4,
                position: "absolute",
                width: "315px",
                height: "315px",
                borderRadius: "50%",
                transform: "translate(94px,113px)",
                background: "linear-gradient(0deg, #000, transparent)",
              }}
            ></div>
            <IoPlay
              style={{
                zIndex: 9,
                color: "#fff",
                transform: "translate(233px,242px)",
                position: "absolute",
                fontSize: 45,
                cursor: "pointer"
              }}
              onClick={handleClickOpen}
            />
          </div>
        </div>
        <div className="col-md-12 col-lg-2">
          <div className="movieDetail__rate">
            <div className="movieDetail__percent">
              <svg className="w-100">
                <circle cx={57} cy={57} r={57} />
                <circle
                  cx={57}
                  cy={57}
                  r={57}
                  style={{
                    strokeDashoffset: `calc(358 - (358 * ${movieDetail?.danhGia})/10)`,
                  }}
                />
              </svg>

              <div className="number">
                <h2 className="mb-0 mr-1">{movieDetail?.danhGia}</h2>
              </div>
              <div className="star">
                {RenderStar(countingStar(movieDetail?.danhGia))}
              </div>
              <p>115 người đánh giá</p>
            </div>
          </div>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <iframe
          width="900"
          height="600"
          src={movieDetail?.trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </Dialog>
    </div>
  );
}
