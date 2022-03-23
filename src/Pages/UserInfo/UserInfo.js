import React, { useState } from "react";
import { useEffect } from "react";
import img from "../../Theme/icons";
import { useDispatch, useSelector } from "react-redux";
import File from "./upload";
import Ticket from "../../Component/Ticket/Ticket";
import { fetchInfoAccount } from "../../Redux/action/credential";
import { Button, Grid } from "@material-ui/core";
import ModalUpdate from "../../Component/Modal/ModalUpdate";
import Loader from "../../Component/Loading";
import { Warning } from "@material-ui/icons";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

export default function UserInfo() {
  const dispatch = useDispatch();
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const { userInfo } = useSelector((state) => state.credential);
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchInfoAccount());
  }, [userInfo.thongTinDatVe?.length]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  if (!localStorage.getItem("token")) {
    Swal.fire({
      title: "Bạn Vui Lòng Đăng Nhập",
      icon: "warning",
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        history.push("/signin");
      } else {
        history.push("/");
      }
    });
  }

  return (
    <>
      {isLoading && <Loader />}
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
                  Họ & Tên:{" "}
                  <span>
                    {userInfo.hoTen ? userInfo.hoTen : "Không có thông tin"}
                  </span>
                </p>
                <p className="ticket__text">
                  Tài Khoản:{" "}
                  <span>
                    {userInfo.taiKhoan
                      ? userInfo.taiKhoan
                      : "Không có thông tin"}
                  </span>
                </p>
                <p className="ticket__text">
                  Email:{" "}
                  <span>
                    {userInfo.email ? userInfo.email : "Không có thông tin"}
                  </span>
                </p>
                <p className="ticket__text">
                  Số Điện Thoại:{" "}
                  <span>
                    {userInfo.soDT ? userInfo.soDT : "Không có thông tin"}
                  </span>
                </p>
              </div>
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
                    <Grid item sm={12} md={6} key={index}>
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
                      <Ticket ticket={ticket} />
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
            Chi Tiết
          </Button>
        </div>
      </div>
    </>
  );
}
