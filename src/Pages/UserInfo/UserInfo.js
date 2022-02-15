import React, { useState } from "react";
import { useEffect } from "react";
import img from "../../Theme/icons";
import { useDispatch, useSelector } from "react-redux";
import File from "./upload";
import { InfoBookingTicket } from "../../_core/models/InfoBookingTicket";
import Ticket from "../../Component/Ticket/Ticket";
import { fetchInfoAccount } from "../../Redux/action/credential";
import { Box, Button, Modal } from "@material-ui/core";
import ModalUpdate from "../../Component/Modal/ModalUpdate";
export default function UserInfo() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const ticketBooked = JSON.parse(localStorage.getItem("infoTicket"));
  const {
    userInfo: { email, hoTen, taiKhoan, soDT, thongTinDatVe },
  } = useSelector((state) => state.credential);

  useEffect(() => {
    dispatch(fetchInfoAccount());
  }, []);
 

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="infoUser">
      <div className="infoUser__cover">
        <div
          className="infoUser__top"
          style={{ background: `url(${img.cover})` }}
        >
          <div className="infoUser__item">
            <File />
            <h3>{localStorage.getItem("account")}</h3>
          </div>
        </div>
        <hr />
        <div className="infoUser__bottom">
          <div className="infoUser__table">
            <div className="infoUser__user">
              {/* <p>Your Name: {data.hoTen}</p>
              <p>Your Username: {data.taiKhoan}</p>
              <p>Your Email: {data.email}</p>
              <p>Your Phone Number: {data.soDT}</p> */}
              <p>Your Name: {hoTen} </p>
              <p>Your Username: {taiKhoan}</p>
              <p>Your Email: {email}</p>
              <p>Your Phone Number: {soDT}</p>
            </div>
            {/* <button className="buttonStyle">Cập Nhật</button> */}
            <Button className="buttonStyle" onClick={handleOpen}>Cập Nhật</Button>
              <ModalUpdate handleClose={handleClose} open={open}/>
          </div>
        </div>
        <hr />

        <h1>LỊCH SỬ ĐẶT VÉ KHÁCH HÀNG</h1>
        <div className="infoUser__ticket text-dark">
          {thongTinDatVe ? (
            thongTinDatVe.map((ticket, index) => (
              <Ticket ticket={ticket} key={index} />
            ))
          ) : (
            <p>Chưa Có Vé Nào Được Đặt</p>
          )}
        </div>
      </div>
    </div>
  );
}
