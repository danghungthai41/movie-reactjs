import React, { Fragment, useState } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink, Redirect, useLocation } from "react-router-dom";
import { Box, MenuItem, MenuList, Typography } from "@material-ui/core";
import img from "../../Theme/icons";
import Swal from "sweetalert2";
import {
  IoChevronDownOutline,
  IoHome,
  IoPeopleSharp,
  IoPodium,
  IoVideocam,
  IoPushOutline,
} from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import useWindowSize from "../../HOCS/useWindowSize";

export default function AdminTemplate(props) {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(true);

  const handleOpenSubMenu = () => {
    setOpenSubMenu(!openSubMenu);
  };
  if (localStorage.getItem("userLogin") !== "QuanTri") {
    Swal.fire({
      title: "Bạn không có quyền truy cập",
      icon: "warning",
    });
    return <Redirect to="/" />;
  }
  return (
    <Box>
      <Box>
        <Box
          sx={{
            position: "fixed",
            backgroundColor: "rgb(0, 21, 41)",
            height: "100vh",
            minWidth: "250px",
            color: "rgba(255, 255, 255, 0.65)",
          }}
        >
          <NavLink to="/dashboard/users">
            <Typography className="p-2">
              <img style={{ width: "50px" }} src={img.logo} alt="" />
              <span className="ml-3 text-white">ADMIN</span>
            </Typography>
          </NavLink>

          <MenuList>
            <MenuItem>
              <IoPeopleSharp />
              <HashLink
                to="/dashboard/users"
                className="nav-link w-100"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                Khách Hàng
              </HashLink>
            </MenuItem>

            <MenuItem onClick={handleOpenSubMenu}>
              <IoPodium />
              <div className="nav-link">
                Thư Mục Phim
                <span style={{ marginLeft: 100 }}>
                  <IoChevronDownOutline />
                </span>
              </div>
            </MenuItem>

            {openSubMenu && (
              <>
                <MenuItem>
                  <div className="ml-4 w-100">
                    <IoVideocam />
                    <HashLink
                      to="/dashboard/films"
                      className="nav-link w-100"
                      scroll={(el) =>
                        el.scrollIntoView({ behavior: "auto", block: "end" })
                      }
                    >
                      Phim
                    </HashLink>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="ml-4 w-100">
                    <IoPushOutline />
                    <HashLink
                      to="/dashboard/addnew"
                      className="nav-link w-100"
                      scroll={(el) =>
                        el.scrollIntoView({ behavior: "auto", block: "end" })
                      }
                    >
                      Thêm Mới Phim
                    </HashLink>
                  </div>
                </MenuItem>
              </>
            )}

            <NavLink button to="/home" sx={{}}>
              <ListItemText className="ml-2" primary="Trở lại trang chủ" />
            </NavLink>
          </MenuList>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "300px",
        }}
      >
        <Box
          sx={{
            height: "60px",
            backgroundColor: "rgb(0, 21, 41)",
          }}
        >
          <Typography color="#fff" variant="button">
            {location.pathname.slice(1).toLocaleUpperCase()}
          </Typography>
        </Box>

        <Box >{props.children}</Box>
      </Box>
    </Box>
  );
}
