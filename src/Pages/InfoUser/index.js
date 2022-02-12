import React from "react";
import { useEffect } from "react";
import { fetchInfoAccount } from "../../Redux/action/credential";
import img from "../../Theme/icons";
import { useDispatch, useSelector } from "react-redux";
import File from "./upload";
import { InfoBookingTicket } from "../../_core/models/InfoBookingTicket";
import Ticket from "../../Component/Ticket/Ticket";
export default function InfoUser() {
  const ticketBooked = JSON.parse(localStorage.getItem("infoTicket"));
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
              <p>Your Name: </p>
              <p>Your Username: </p>
              <p>Your Email: </p>
              <p>Your Phone Number: </p>
            </div>
            <button className="buttonStyle">Cập Nhật</button>
          </div>
        </div>
        <hr />
        <div className="infoUser__ticket text-dark" style={{ height: 500 }}>
          {ticketBooked ? (
            ticketBooked.map((ticket, index) => (
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
