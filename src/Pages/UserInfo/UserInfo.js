import React, { useState } from "react";
import { useEffect } from "react";
import img from "../../Theme/icons";
import { useDispatch, useSelector } from "react-redux";
import File from "./upload";
import { InfoBookingTicket } from "../../_core/models/InfoBookingTicket";
import Ticket from "../../Component/Ticket/Ticket";
import { fetchInfoAccount } from "../../Redux/action/credential";
import { Box, Button, Grid, Modal } from "@material-ui/core";
import ModalUpdate from "../../Component/Modal/ModalUpdate";
import { NavLink } from "react-router-dom";
import { IoHome } from "react-icons/io5";

export default function UserInfo() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { userInfo } = useSelector((state) => state.credential);
  const { isLoading } = useSelector((state) => state.loading);
  console.log({ isLoading });

  const listenSelectedLstSeatChange = useSelector(
    (state) => state.booking.selectedLstSeat
  );
  useEffect(() => {
    dispatch(fetchInfoAccount());
  }, [userInfo.thongTinDatVe.length]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
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
                    {userInfo.taiKhoan
                      ? userInfo.taiKhoan
                      : "Không có thông tin"}
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

          <h1 className="pr-0">LỊCH SỬ ĐẶT VÉ KHÁCH HÀNG</h1>
          <div className="infoUser__ticket mb-4">
            <Grid
              container
              gap={1}
              spacing={2}
              rowSpacing={1}
              columnSpacing={1}
              sx={{ width: "100%", height: "100%" }}
            >
              {userInfo.thongTinDatVe ? (
                userInfo.thongTinDatVe
                  .reverse()
                  .slice(0, 4)
                  .map((ticket, index) => (
                 

                    <Grid item sm={12} md={6} key={index} >
                      <Ticket ticket={ticket} />
                    </Grid>
                  ))
              ) : (
                <p>Chưa Có Vé Nào Được Đặt</p>
              )}
            </Grid>
          </div>

          {showMore && (
            <div className="infoUser__ticket mb-4">
              <Grid
                container
                gap={1}
                spacing={2}
                rowSpacing={1}
                columnSpacing={1}
                sx={{ width: "100%", height: "100%" }}
              >
                {userInfo.thongTinDatVe &&
                  userInfo.thongTinDatVe.reverse().map((ticket, index) => (
                    <Grid item sm={12} md={6} key={index}>
                      <Ticket ticket={ticket}  />
                    </Grid>
                  ))}
              </Grid>
            </div>
          )}

          <Button
            sx={{ left: "44%" }}
            className="buttonStyle m-auto d-block"
            onClick={() => setShowMore(!showMore)}
          >
            Show More
          </Button>
        </div>
      </div>
    </>
  );
}
