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
            key={ghe.stt}
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
        <div className="checkOutLeft__infoCine">
          <div className="flex">
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
          <div className="checkOutLeft__SeatMap--cover">
            <div className="checkOutLeft__screen">
              <img
                className=""
                // style={{ width: "100%", height: "70px" }}
                src={img.screen}
                alt=""
              />
            </div>
            <div className="checkOutLeft__coverSeatItem">
              {renderLstSeatMap()}
            </div>
          </div>
        </div>

        <div className="text-dark mt-3">
          <div className="flex justify-evenly align-center">
            <div className="text-center">
              <span> Ghế Chưa Đặt</span>
              <div className="ghe"></div>
            </div>

            <div className="text-center">
              Ghế Đã Đặt <div className="gheDaDat"></div>
            </div>

            <div className="text-center">
              Ghế Đang Đặt <div className="gheDangDat"></div>
            </div>

            <div className="text-center">
              Ghế VIP <div className="gheVip"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return <React.Fragment>{renderCheckOutLeft()}</React.Fragment>;
}
