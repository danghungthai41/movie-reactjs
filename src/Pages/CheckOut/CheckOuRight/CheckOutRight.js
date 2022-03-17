import React, { Fragment, useCallback, useState } from "react";
import moment from "moment";
import img from "../../../Theme/icons";
import { useDispatch, useSelector } from "react-redux";
import SeatItem from "../CheckOutLeft/SeatItem";
import { InfoBookingTicket } from "../../../_core/models/InfoBookingTicket";
import {
  bookingTicketAction,
  fetchTicketRoom,
} from "../../../Redux/action/booking";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

import { IoArrowForwardOutline } from "react-icons/io5";
import createAction from "../../../Redux/action";
import { BOOKING_SUCCESS } from "../../../Redux/constants";
export default function CheckOutRight(props) {
  const history = useHistory();
  const { thongTinPhim } = props;
  const dispatch = useDispatch();
  let selectedLstSeat = useSelector((state) => state.booking.selectedLstSeat);
  const createInfoTicket = () => {
    const infoBookingTicket = new InfoBookingTicket();
    infoBookingTicket.maLichChieu = thongTinPhim?.maLichChieu;
    infoBookingTicket.danhSachVe = selectedLstSeat;
    infoBookingTicket.tenPhim = thongTinPhim?.tenPhim;
    infoBookingTicket.tenCumRap = thongTinPhim?.tenCumRap;
    infoBookingTicket.diaChi = thongTinPhim?.diaChi;
    infoBookingTicket.taiKhoanNguoiDung = localStorage.getItem("userLogin");
    infoBookingTicket.timeBooking = new Date();
    Swal.fire({
      title: "Bạn chắc chắn muốn đặt ghế?",
      icon: "success",
      buttons: true,
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy bỏ",
    }).then((res) => {
      if (res.isConfirmed) {
        dispatch(bookingTicketAction(infoBookingTicket));
        Swal.fire({
          icon: "success",
          title: "Đặt Vé Thành Công",
          buttons: true,
          showCancelButton: true,
          confirmButtonText: "Tiếp tục đặt vé",
          cancelButtonText: "Thông tin vé",
        }).then((response) => {
          if (response.isConfirmed) return history.push("/info");
        });
      } else{
        dispatch(createAction(BOOKING_SUCCESS, []))
      }
    });
  };
  const renderCheckOutRight = () => {
    return (
      <div className="checkOutRight">
        <div className="checkOutRight__cover">
          <p className="title">
            {" "}
            {selectedLstSeat
              .reduce((tong, item) => {
                return (tong += item.giaVe);
              }, 0)
              .toLocaleString()}
            {"đ"}
          </p>
          <div className="checOutRight__infoMovie">
            <img src={thongTinPhim?.hinhAnh} alt="" />
            <div>
              <p className="mb-0">
                {" "}
                <span className="buttonStyle">2D</span>
                {thongTinPhim?.tenPhim}
              </p>
              <p className="mb-0">Địa chỉ: {thongTinPhim?.diaChi}</p>
            </div>
          </div>
          <div className="checkOutRight__infoCinema">
            <p>
              Ghế:
              {selectedLstSeat?.map((item) => {
                return (
                  <span key={item.stt} className="mr-2">
                    {" "}
                    {item.tenGhe}
                  </span>
                );
              })}
            </p>
          </div>
          <div className="checkOutRight__infoPay">
            <p className="m-1">Email</p>
            <input className="input mb-2" type="text" />
            <p className="m-1">Phone</p>
            <input className="input mb-3" type="text" />
            <p className="">Hình Thức Thanh Toán</p>

            <div style={{ color: "#4a4a4a" }}>
              <input type="radio" id="zalo" name="name" value="zalo" checked />
              <img
                className="mx-1"
                src={img.zalopay}
                style={{ width: 30 }}
                alt=""
              />
              <label for="zalo">Thanh toán qua ZaloPay</label>
            </div>
            <div style={{ color: "#4a4a4a" }}>
              <input type="radio" id="visa" name="name" value="visa" />
              <img
                className="mx-1"
                src={img.visa}
                style={{ width: 30 }}
                alt=""
              />
              <label for="visa">Visa, Master, JCB</label>
            </div>
            <div style={{ color: "#4a4a4a" }}>
              <input type="radio" id="atm" name="name" value="atm" />
              <img
                className="mx-1"
                src={img.dos}
                style={{ width: 30 }}
                alt=""
              />
              <label for="atm">Thẻ ATM nội địa</label>
            </div>
          </div>

          <button
            className="buttonStyle w-100"
            onClick={createInfoTicket}
            disabled={selectedLstSeat.length === 0}
          >
            Đặt Ghế
          </button>
        </div>

        <div className="buttonResponsive">
          <button className="buttonStyle">
            {selectedLstSeat.length > 0 ? (
              <>
                Nhấn Đặt Vé <IoArrowForwardOutline />
              </>
            ) : (
              "Vui Lòng Chọn Ghế"
            )}
          </button>
          <button
            className={`buttonStyle ${
              selectedLstSeat.length > 0 ? "activeButton" : ""
            } `}
            onClick={createInfoTicket}
            disabled={selectedLstSeat.length === 0}
          >
            Đặt Vé
          </button>
        </div>
      </div>
    );
  };
  return <React.Fragment>{renderCheckOutRight()}</React.Fragment>;
}
