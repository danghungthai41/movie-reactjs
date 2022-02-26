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
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";

export default function UserInfo() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const ticketBooked = JSON.parse(localStorage.getItem("infoTicket"));
  const { userInfo } = useSelector((state) => state.credential);
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
            <h3>{localStorage.getItem("account").toUpperCase()}</h3>
          </div>
        </div>
        <hr />
        <div className="infoUser__bottom">
          <div className="infoUser__table">
            <div className="infoUser__user">
              <p className="ticket__text">
                Your Name:{" "}
                <span>
                  {userInfo.hoTen ? userInfo.hoTen : "Không có thông tin"}
                </span>
              </p>
              <p className="ticket__text">
                Your Username:{" "}
                <span>
                  {userInfo.taiKhoan ? userInfo.taiKhoan : "Không có thông tin"}
                </span>
              </p>
              <p className="ticket__text">
                Your Email:{" "}
                <span>
                  {userInfo.email ? userInfo.email : "Không có thông tin"}
                </span>
              </p>
              <p className="ticket__text">
                Your Phone Number:{" "}
                <span>
                  {userInfo.soDT ? userInfo.soDT : "Không có thông tin"}
                </span>
              </p>
            </div>
            {/* <button className="buttonStyle">Cập Nhật</button> */}
            <Button className="buttonStyle" onClick={handleOpen}>
              Cập Nhật
            </Button>
            <ModalUpdate
              handleClose={handleClose}
              open={open}
              userInfo={userInfo}
            />
          </div>
        </div>
        <hr />

        <h1>LỊCH SỬ ĐẶT VÉ KHÁCH HÀNG</h1>
        <div className="infoUser__ticket">
          {userInfo.thongTinDatVe ? (
            userInfo.thongTinDatVe.slice(0, 2).map((ticket, index) => (
              <Box
                sx={{
                  border: "1px dashed #4a4a4a4a",
                  padding: "30px",
                  borderRadius: "10px",
                  marginBottom: "25px",
                }}
              >
                <Ticket ticket={ticket} key={index} />
              </Box>
            ))
          ) : (
            <p>Chưa Có Vé Nào Được Đặt</p>
          )}
        </div>

        {showMore && (
          <div className="infoUser__ticket">
            {userInfo.thongTinDatVe &&
              userInfo.thongTinDatVe
                .slice(2, userInfo.thongTinDatVe.length - 1)
                .map((ticket, index) => (
                  <Box
                    sx={{
                      border: "1px dashed #4a4a4a4a",
                      padding: "30px",
                      borderRadius: "10px",
                      marginBottom: "25px",
                    }}
                  >
                    <Ticket ticket={ticket} key={index} />
                  </Box>
                ))}
          </div>
        )}
        <Button
          sx={{ left: "44%" }}
          className="buttonStyle m-auto"
          onClick={() => setShowMore(!showMore)}
        >
          Show More
        </Button>
      </div>
    </div>
  );
}
