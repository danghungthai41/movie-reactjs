import Countdown from "antd/lib/statistic/Countdown";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Route } from "react-router-dom";
import Header from "../../../Component/Header";
import { changeImgByCinema } from "../../../Component/ShowTimeHome/ShowTimeLeft/ShowTimeLeft";
import createAction from "../../../Redux/action";
import { PUSH_SELECTED_SEAT } from "../../../Redux/constants";
import img from "../../../Theme/icons";
import { pad } from "../../Detail/ShowTime/RenderShowTime";
// import { countingTime } from "../CheckOut";
import SeatItem from "./SeatItem";
import CheckOut from "../CheckOut";
import moment from "moment";
import _ from "lodash";
import Swal from "sweetalert2";
import { IoCloseOutline, IoLockClosed } from "react-icons/io5";

export default function CheckOutLeft({
  ticketRoomList: { danhSachGhe, thongTinPhim },
}) {
  const dispatch = useDispatch();

  let { selectedLstSeat, lockedSeat } = useSelector((state) => state.booking);

  let specialLstSeat = [];
  //Push danhsachghe gần đầu hàng vào mảng để check điều kiện
  for (let i = 1, k = 14; i < danhSachGhe?.length; i += 16, k += 16) {
    specialLstSeat.push(+danhSachGhe[i].tenGhe);
    specialLstSeat.push(+danhSachGhe[k].tenGhe);
  }

  const notiMessage = (icon, title) => {
    Swal.fire({
      icon: `${icon}`,
      title: `${title}`,
    });
  };

  if (selectedLstSeat.length > 0) {
    if (selectedLstSeat.length > 1) {
      const cloneSelectedLstSeat = [...selectedLstSeat];
      let middleStt = null;
      cloneSelectedLstSeat.sort((a, b) => +a.stt - b.stt);
      cloneSelectedLstSeat.map((seat1, index1) => {
        cloneSelectedLstSeat.map((seat2, index2) => {
          if (index1 !== index2 && index1 < index2) {
            if (+seat1.stt + 1 === +seat2.stt - 1) {
              middleStt = +seat1.stt + 1;
            }
            if (middleStt) {
              let index = cloneSelectedLstSeat.findIndex((checkSeat) => {
                return +checkSeat.stt === middleStt;
              });
              if (index === -1) {
                notiMessage(
                  "warning",
                  "Không được bỏ trống ghế ở giữa mỗi hàng"
                );
                return null;
              }
            }
          }
        });
      });
    }
  }

  const renderLstSeatMap = () => {
    return danhSachGhe?.map((ghe, index) => {
      let classVip = ghe.loaiGhe === "Vip" ? "gheVip" : "";
      let classDaDat = ghe.daDat ? "gheDaDat" : "";
      let classDangDat = "";
      let classLockedSeat = "";
      let indexGheDD = selectedLstSeat?.findIndex(
        (gheDD) => gheDD.tenGhe === ghe.tenGhe
      );
      if (indexGheDD !== -1) {
        classDangDat = "gheDangDat";
      }
      let indexLockedSeat = lockedSeat?.findIndex(
        (seat) => seat.maGhe === ghe.maGhe
      );
      if (indexLockedSeat !== -1) {
        classLockedSeat = "gheKhachDat";
      }
      return (
        <React.Fragment>
          <button
            onClick={() => {
              dispatch(createAction(PUSH_SELECTED_SEAT, ghe));
            }}
            className={`checkOutLeft__seatItem ghe ${classVip} ${classDaDat} ${classDangDat} ${classLockedSeat}`}
            disabled={ghe.daDat || classLockedSeat !== ""}
          >
            {ghe.daDat ? (
              <IoCloseOutline />
            ) : classLockedSeat !== "" ? (
              <IoLockClosed />
            ) : (
              ghe.stt
            )}
          </button>
          {(index + 1) % 16 === 0 && <br />}
        </React.Fragment>
      );
    });
  };

  const renderCheckOutLeft = () => {
    return (
      <div className="checkOutLeft">
        <div className="checkOutLeft__title">
          <ul className="checkOutLeft__navbar">
            <li className="checkOutLeft__item d-flex">
              <p className="mr-5 mb-0">01 CHỌN GHẾ &amp; THANH TOÁN</p>{" "}
              <p className="mb-0">02 KẾT QUẢ ĐẶT VÉ</p>
            </li>

            <li className="checkOutLeft__item">
              <NavLink to="/">
                <img src={img.logo} style={{ width: "40px" }} alt="" />
              </NavLink>
            </li>
            <li className="checkOutLeft__item">
              <img
                src={img.catCry}
                style={{
                  width: "30px",
                  borderRadius: "50%",
                  marginRight: "7px",
                }}
                alt=""
              />
              <span>{localStorage.getItem("account")}</span>
            </li>
          </ul>
        </div>
        <div className="checkOutLeft__infoCine">
          <div className="col-12 d-flex">
            <img
              className="mr-4"
              src={img.bhd}
              style={{ width: "50px", height: "50px" }}
              alt=""
            />
            <div className="checkOutLeft__text">
              <span className="animationTextCinema">
                {thongTinPhim?.tenCumRap}
              </span>

              <p className="mb-0">
                {thongTinPhim?.ngayChieu}
                {" - "}
                <span>{thongTinPhim?.gioChieu}</span>
                {" - "}
                <span> {thongTinPhim?.tenRap}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="checkOutLeft__SeatMap">
          <div className="checkOutLeft__screen">
            <img
              className=""
              style={{ width: "100%", height: "70px" }}
              src={img.screen}
              alt=""
            />
          </div>

          <div className="checkOutLeft__SeatMap--cover">
            {renderLstSeatMap()}
          </div>
        </div>

        <div className="text-dark mt-3">
          <table className="d-block text-center">
            <thead className="flex justify-center ">
              <tr>
                <th className=" pr-5">
                 <span> Ghế Chưa Đặt</span>
                  <div className="ghe"></div>
                </th>
                <th className=" pr-5">
                  Ghế Đã Đặt <div className="gheDaDat"></div>{" "}
                </th>
                <th className=" pr-5">
                  Ghế Đang Đặt <div className="gheDangDat"></div>{" "}
                </th>
                <th className=" pr-5">
                  Ghế VIP <div className="gheVip"></div>{" "}
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    );
  };
  return <React.Fragment>{renderCheckOutLeft()}</React.Fragment>;
}
