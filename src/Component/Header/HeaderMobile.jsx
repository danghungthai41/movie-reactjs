import React, { useState } from "react";
import img from "../../Theme/icons";
import {
  IoMenuSharp,
  IoClose,
  IoHome,
  IoPersonCircleSharp,
  IoNewspaperOutline,
  IoCalendarNumberOutline,
  IoArrowBackOutline,
  IoMegaphoneOutline,
  IoRibbonSharp,
  IoArrowForwardOutline,
} from "react-icons/io5";
import { MenuList, MenuItem } from "@material-ui/core";
import { HashLink } from "react-router-hash-link";
import Swal from "sweetalert2";
import { ADD_USER, SET_TOKEN } from "../../Redux/constants";
import createAction from "../../Redux/action/index";
import { NavLink } from "react-router-dom";
const HeaderMobile = ({ dispatch, token }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="header-mobile ">
      <div className="header-mobile-contain">
        <NavLink to="/home">
          <img src={img.logo} style={{ width: "50px" }} alt="" />
        </NavLink>

        <div className="header-mobile-icon">
          {openMenu ? (
            <IoClose onClick={handleOpenMenu} />
          ) : (
            <IoMenuSharp onClick={handleOpenMenu} />
          )}
        </div>
      </div>
      {openMenu && (
        <div
          className={`header-nav ${openMenu ? "display-menu" : "hidden-menu"}`}
        >
          <MenuList>
            <h4>
              <IoPersonCircleSharp size={45} />
              <span>{localStorage.getItem("account")}</span>
            </h4>

            <MenuItem>
              <IoHome />
              <HashLink
                to="/#"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                TRANG CHỦ
              </HashLink>
            </MenuItem>

            <MenuItem>
              <IoNewspaperOutline />
              <HashLink
                to="/#tinTuc"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                TIN TỨC
              </HashLink>
            </MenuItem>

            <MenuItem>
              <IoCalendarNumberOutline />
              <HashLink
                to="/#lichChieu"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                LỊCH CHIẾU
              </HashLink>
            </MenuItem>

            <MenuItem>
              <IoMegaphoneOutline />
              <HashLink
                to="/#cumRap"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                CỤM RẠP
              </HashLink>
            </MenuItem>

            <MenuItem>
              <IoPersonCircleSharp />
              {/* <NavLink to="/info">
                  <span>Trang Cá Nhân</span>
                </NavLink> */}

              <HashLink
                to="/info"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                TRANG CÁ NHÂN
              </HashLink>
            </MenuItem>
            {localStorage.getItem("userLogin") === "QuanTri" && (
              <>
                <MenuItem>
                  <IoRibbonSharp />
                  <HashLink to="/dashboard/users" className="nav-link">
                    TRANG QUẢN TRỊ
                  </HashLink>
                </MenuItem>
              </>
            )}
            {token ? (
              <MenuItem
                onClick={() => {
                  setOpenMenu(false);
                  Swal.fire({
                    icon: "warning",
                    title: "Bạn chắc chắn muốn đăng xuất",
                    showCancelButton: true,
                    confirmButtonText: "Đăng Xuất",
                    cancelButtonText: "Hủy Bỏ",
                  }).then((res) => {
                    if (res.isConfirmed) {
                      localStorage.removeItem("token");
                      localStorage.removeItem("userLogin");
                      dispatch(createAction(SET_TOKEN, ""));
                      dispatch(createAction(ADD_USER, ""));
                      Swal.fire({
                        title: "Đăng Xuất Thành Công",
                        icon: "success",
                      });
                    } else {
                      setOpenMenu(true);
                    }
                  });
                }}
              >
                <IoArrowBackOutline />
                <span className="ml-3 py-2">ĐĂNG XUẤT</span>
              </MenuItem>
            ) : (
              <MenuItem>
                <IoArrowForwardOutline />
                <HashLink to="/signin" className="nav-link">
                  ĐĂNG NHẬP
                </HashLink>
              </MenuItem>
            )}
          </MenuList>
        </div>
      )}
    </nav>
  );
};

export default HeaderMobile;
