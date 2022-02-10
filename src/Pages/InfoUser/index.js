import React from "react";
import { useEffect } from "react";
import { fetchInfoAccount } from "../../Redux/action/credential";
import img from "../../Theme/icons";
import { useDispatch, useSelector } from "react-redux";
import File from "./upload";
import { InfoBookingTicket } from "../../_core/models/InfoBookingTicket";
export default function InfoUser() {
  const dispatch = useDispatch();
  // const ticketBooked = useSelector((state) => state.booking.ticketBooked);
  // const taiKhoan = localStorage.getItem("taiKhoan");
  // useEffect(()=>{
    //     dispatch(fetchInfoAccount(taiKhoan))
    // },[taiKhoan])
    const data = JSON.parse(localStorage.getItem("user"));
    const ticketBooked = JSON.parse(localStorage.getItem("infoTicket"))
   

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
              <p>Your Name: {data.hoTen}</p>
              <p>Your Username: {data.taiKhoan}</p>
              <p>Your Email: {data.email}</p>
              <p>Your Phone Number: {data.soDT}</p>
            </div>
            <button className="buttonStyle">Cập Nhật</button>
          </div>
        </div>
        <hr />
        <div className="infoUser__ticket text-dark" style={{height: 500}}>
          {ticketBooked?.map((item) => {
            return (
              <div key={item.stt}>
                

                {/* <p>{item.stt}</p>
                <p>{item.giaVe}</p>
                <p>{item.loaiGhe}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
