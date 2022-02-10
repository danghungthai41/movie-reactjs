import React, { Fragment, useCallback, useState } from "react";
import moment from "moment";
import img from "../../../Theme/icons";
import { useDispatch, useSelector } from "react-redux";
import SeatItem from "../CheckOutLeft/SeatItem";
import { InfoBookingTicket } from "../../../_core/models/InfoBookingTicket";
import { bookingTicketAction } from "../../../Redux/action/booking";
import Swal from "sweetalert2";

export default function CheckOutRight(props) {
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
    Swal.fire({
      title: "Bạn chắc chắn muốn đặt ghế?",
      icon: "success",
      buttons: true,
      showCancelButton: true,
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy bỏ",
    }).then((res) => {
      res.isConfirmed && dispatch(bookingTicketAction(infoBookingTicket));
    });

    // if (localStorage.getItem("infoTicket")) {
    //   const ticketBooked = JSON.parse(
    //     localStorage.getItem("infoTicket")
    //   );
    //   infoBookingTicket.danhSachVe.map((item) => {
    //     ticketBooked.push(item);
    //   });
    //   localStorage.setItem(
    //     "infoTicket",
    //     JSON.stringify(infoBookingTicket)
    //   );
    // } else {
    //   localStorage.setItem("infoTicket", JSON.stringify(infoBookingTicket));
    // }
  };
  // var totalSeconds = 15;
  // React.useEffect(() => {
  //   setInterval(setTime, 1000);

  //   return () => {
  //     clearInterval();
  //   };
  // }, []);

  // function setTime() {
  //   if (totalSeconds === 0) {
  //     return;
  //   }
  //   --totalSeconds;
  //   setSecondsLabel(pad(totalSeconds % 60));
  //   setMinutesLabel(pad(parseInt(totalSeconds / 60)));
  // }

  // function pad(val) {
  //   var valString = val + "";
  //   if (valString.length < 2) {
  //     return "0" + valString;
  //   } else {
  //     return valString;
  //   }
  // }
  // const randomImg = useCallback(() => {
  //   const { rap1, rap2, rap3, rap4, rap5 } = img;
  //   const lstRap = [rap1, rap2, rap3, rap4, rap5];
  //   const random = Math.floor(Math.random() * lstRap.length);
  //   return lstRap[random];
  // }, []);

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
              <p className="mb-0">
                {/* {thongTinPhim?.gioChieu} - Cybersoft Cinema - 8.5 IMDb */}
                Địa chỉ: {thongTinPhim?.diaChi}
              </p>
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
          {/* <div className="checkOutRight__infoPay">
            <p className="m-0">Email</p>
            <input type="text" />
            <p className="m-0">Phone</p>
            <input type="text" />
            <p className="m-0">Hình Thức Thanh Toán</p>

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
          </div> */}

          <div className="checkOutRight__showBill text-dark">
            <p>
              Tổng tiền:{" "}
              {selectedLstSeat
                .reduce((tong, item) => {
                  return (tong += item.giaVe);
                }, 0)
                .toLocaleString()}{" "}
              VNĐ
            </p>
          </div>

          <button
            className="buttonStyle w-100"
            onClick={createInfoTicket}
            disabled={selectedLstSeat.length === 0}
          >
            Đặt Ghế
          </button>
        </div>
      </div>
    );
  };
  return <React.Fragment>{renderCheckOutRight()}</React.Fragment>;
}
