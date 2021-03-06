import { Star } from "@material-ui/icons";
import React, { useState } from "react";
import img from "../../../Theme/icons";
import Dialog from "@material-ui/core/Dialog";

import { IoEyeSharp, IoStar, IoReorderFour } from "react-icons/io5";
import { useSelector } from "react-redux";
import Loader from "../../../Component/Loading";
import { HashLink } from "react-router-hash-link";

const getThoiLuong = (arrLichChieu) => {
  if (arrLichChieu) {
    const thoiLuongArr = arrLichChieu.map((item) => item.thoiLuong);
    const thoiLuong = new Set(thoiLuongArr);
    return thoiLuong;
  }
  return 100;
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

export default function MovieDetail(props) {
  const { movieDetail } = props;
  const { isLoading } = useSelector((state) => state.loading);
  const [isOpen, setIsOpen] = useState(false);
  const RenderStar = (countingStar) => {
    const arrStar = [];
    for (let index = 0; index < countingStar; index++) {
      arrStar.push(<Star autocomplete />);
    }
    return arrStar;
  };
  return (
    <>
      {isLoading && <Loader />}

      <div className="movieDetail__top">
        <div className="movieDetail__overlay"></div>

        <div className="movieDetail__cover row">
          <div className="col-12 col-xl-6">
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
              <div className="overlay"></div>

              <img
                src={img.buttonPlay}
                className="button__play"
                onClick={() => setIsOpen(true)}
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-xl-6">
            <div className="movieDetail__infoMovie">
              <p className="movieDetail__title">{movieDetail.tenPhim}</p>
              <p>
                Th???i L????ng: {getThoiLuong(movieDetail.lichChieu)} ph??t -{" "}
                {movieDetail.danhGia} IMDb - 2D/Digital
              </p>
              <div className="movieDetail__typography">
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
              <div className="flex align-center justify-between">
                <div className="movieDetail__content">
                  <p className="m-0">Nh?? s???n xu???t: Mike Tyson</p>
                  <p className="m-0">Qu???c gia: M???</p>
                  <p className="mb-2">Th??? lo???i: H??nh ?????ng</p>
                  <p>N???i Dung: {movieDetail.moTa}</p>
                </div>

                <div className="movieDetail__rate">
                  <div className="movieDetail__percent ">
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
                  </div>
                  <div className="star">
                    {RenderStar(countingStar(movieDetail?.danhGia))}
                    <p>115 ng?????i ????nh gi??</p>
                  </div>
                </div>
              </div>

              <button className="buttonStyle mr-3">
                <HashLink
                  to={`/detail/${movieDetail?.maPhim}#lichChieuChiTiet`}
                  className="nav-link"
                  scroll={(el) =>
                    el.scrollIntoView({ behavior: "auto", block: "end" })
                  }
                >
                  Mua V??
                </HashLink>
              </button>
            </div>
          </div>
        </div>
        <Dialog
          onClose={() => setIsOpen(false)}
          aria-labelledby="customized-dialog-title"
          open={isOpen}
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
    </>
  );
}
