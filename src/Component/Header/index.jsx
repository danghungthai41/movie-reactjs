import React, { useState } from "react";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { NavLink } from "react-router-dom";
import { ADD_USER, SET_TOKEN } from "../../Redux/constants";

import { useSelector, useDispatch } from "react-redux";
import img from "../../Theme/icons";
import AddLocationIcon from "@material-ui/icons/AddLocation";

import Swal from "sweetalert2";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  const provinceList = [
    "Hồ Chí Minh",
    "Hà Nội",
    "Đà Nẵng",
    "Hải Phòng",
    "Biên Hoà",
    "Nha Trang",
    "Bình Dương",
    "Phan Thiết",
    "Hạ Long",
    "Cần Thơ",
    "Vũng Tàu",
    "Quy Nhơn",
    "Thừa Thiên Huế",
    "Long Xuyên",
    "Thái Nguyên",
    "Buôn Ma Thuột",
    "Bắc Giang",
    "Bến Tre",
    "Việt Trị",
    "Ninh Bình",
    "Thái Bình",
    "Vinh",
    "Bảo Lộc",
    "Đà Lạt",
    "Trà Vinh",
    "Yên Bái",
    "Kiên Giang",
    "Vĩnh Long",
    "Cà Mau",
    "Hậu Giang",
    "Tây Ninh",
    "Tuyên Quang",
    "Thanh Hoá",
    "Nam Định",
    "Hải Dương",
    "Gia Lai",
    "Hà Tĩnh",
    "Phú Yên",
    "Bạc Liêu",
    "Long An",
    "Đồng Hới",
    "Hà Nam",
    "Bắc Ninh",
    "Quảng Trị",
    "Kom Tum",
    "Sóc Trăng",
    "Sơn La",
    "Lạng Sơn",
    "Quảng Ngãi",
    "Mỹ Tho",
    "Đồng Tháp",
    "Hưng Yên",
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const token = useSelector((state) => state.credential.token);
  // const hoTen = localStorage.getItem("hoTen");
  const dispatch = useDispatch();
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const [viewLocation, setViewLocation] = useState("Hồ Chí Minh");

  return (
    <nav
      className="myNavBar navbar navbar-expand-md"
      // style={{  }}
    >
      <div className="col-md-10 col-lg-8">
        <div className="myNavBar__left navbar">
          <NavLink to="/">
            <img className="myNavBar__logo" src={img.logo} alt="LOGO" />
          </NavLink>
          <ul className="nav myNavBar__title" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              {/* <a className="nav-link">
                <HashLink to="/home/#lichChieu">Lịch Chiếu</HashLink>
              </a> */}
              <HashLink
                to="/home/#lichChieu"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                Lịch Chiếu
              </HashLink>
            </li>
            <li className="nav-item" role="presentation">
              {/* <a href="#cumRap" className="nav-link">
                Cụm Rạp
              </a> */}

              <HashLink
                to="/home/#cumRap"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                Cụm Rạp
              </HashLink>
            </li>

            <li className="nav-item" role="presentation">
              <HashLink
                to="/home/#tinTuc"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                Tin Tức
              </HashLink>
            </li>

            <li className="nav-item" role="presentation">
              <HashLink
                to="/home/#ungDung"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                Ứng Dụng
              </HashLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-2 col-lg-4">
        <div className="myNavBar__right">
          <div className="myNavBar__login">
            {token ? (
              <div className="myNavBar__login--cover">
                <IconButton
                  // className={classes.menuButton}
                  onClick={handleMenu}
                  color="inherit"
                >
                  <img
                    style={{ width: 30, borderRadius: "50%" }}
                    src={img.catCry}
                    className=""
                    alt=""
                  />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <NavLink className="myNavBar__infoUser" to="/info">
                      Thông tin cá nhân
                    </NavLink>{" "}
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      // setAnchorEl(null);
                      localStorage.removeItem("token");
                      localStorage.removeItem("userLogin");
                      dispatch({ type: SET_TOKEN, payload: "" });
                      dispatch({ type: ADD_USER, payload: "" });
                      Swal.fire({
                        title: "Are you sure?",
                        text: "You will not be able to recover this imaginary file!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonText: "Yes, delete it!",
                        cancelButtonText: "No, keep it",
                      });
                    }}
                  >
                    Đăng xuất
                  </MenuItem>
                  <MenuItem>
                    <NavLink to="/dashboard">Trang Quản Trị</NavLink>
                  </MenuItem>
                </Menu>
                <span className="myNavBar__name">{localStorage.getItem("account")}</span>
              </div>
            ) : (
              <>
                <img
                  style={{ width: 35, borderRadius: "50%", marginRight: 10 }}
                  src={img.imgNotToken}
                  alt=""
                />{" "}
                <NavLink to="/signin" style={{ marginRight: 10 }}>
                  <span className="abc">Đăng Nhập</span>
                </NavLink>
              </>
            )}
          </div>
          <div className="dropdown">
            <a
              className="dropdown-toggle d-flex align-items-center"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
            >
              <div className="myNavBar__locate">
                <AddLocationIcon style={{ color: "#ffdc00", marginRight: 8 }} />
                <span className="myNavBar__styleText">{viewLocation}</span>
              </div>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              {provinceList.map((item) => (
                <a
                  className="dropdown-item w-100"
                  href="#"
                  key={item}
                  onClick={() => {
                    setViewLocation(item);
                  }}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="col-2 d-lg-none myNavBar__Bars">
        <MenuIcon />
      </div>
    </nav>
  );
}
