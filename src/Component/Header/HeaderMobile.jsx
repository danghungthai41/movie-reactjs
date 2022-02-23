import React, { useState } from "react";
import img from "../../Theme/icons";
import {
  IoMenuSharp,
  IoClose,
  IoHome,
  IoPersonOutline,
  IoPersonCircleSharp,
  IoReturnDownBackSharp
} from "react-icons/io5";
import { Paper, MenuList, MenuItem } from "@material-ui/core";

const HeaderMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="header-mobile">
      <div className="header-mobile-contain">
        <img src={img.logo} style={{ width: "50px" }} alt="" />

        <div className="header-mobile-icon">
          {openMenu ? (
            <IoClose onClick={handleOpenMenu} />
          ) : (
            <IoMenuSharp onClick={handleOpenMenu} />
          )}
        </div>
      </div>
      {openMenu && (
        <div className="header-nav">
          <Paper
            sx={{
              height: "100%",
            }}
            className="h-100"
            variant="outlined"
          >
            <MenuList>
            
              <MenuItem>
                <IoHome />
                <span>TRANG CHỦ</span>
              </MenuItem>
              <MenuItem>TIN TỨC</MenuItem>
              <MenuItem>LỊCH CHIẾU</MenuItem>
              <MenuItem>CỤM RẠP</MenuItem>

              <MenuItem>
                <IoPersonCircleSharp />
                <span>Trang Cá Nhân</span>
              </MenuItem>

              {localStorage.getItem("userLogin") === "QuanTri" && (
                <MenuItem>Trang Quản Trị</MenuItem>
              )}
              <MenuItem>
                <IoReturnDownBackSharp />
                <span>Đăng Xuất</span>
              </MenuItem>
            </MenuList>
          </Paper>
        </div>
      )}
    </nav>
  );
};

export default HeaderMobile;
