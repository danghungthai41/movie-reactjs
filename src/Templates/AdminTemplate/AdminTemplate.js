import React, { Fragment, useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import {
  Link,
  NavLink,
  Redirect,
  Route,
  useLocation,
  useParams,
} from "react-router-dom";
import { Box, MenuItem, MenuList, Typography } from "@material-ui/core";
import img from "../../Theme/icons";
import Swal from "sweetalert2";
import { IoChevronDownOutline, IoHome } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";

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
            minWidth: "300px",
            color: "rgba(255, 255, 255, 0.65)",
          }}
        >
          <NavLink to="/dashboard/users">
            <Typography>
              <img style={{ width: "50px" }} src={img.logo} alt="" />
              <span className="ml-3">ADMIN</span>
            </Typography>
          </NavLink>

          <MenuList>
            <MenuItem>
              <IoHome />
              <HashLink
                to="/dashboard/users"
                className="nav-link"
                scroll={(el) =>
                  el.scrollIntoView({ behavior: "auto", block: "end" })
                }
              >
                Khách Hàng
              </HashLink>
            </MenuItem>

            <MenuItem onClick={handleOpenSubMenu}>
              <IoHome />
              <div className="nav-link">
                Films
                <span className="text-right">
                  <IoChevronDownOutline />
                </span>
              </div>
            </MenuItem>
            {/* <ListItem button>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>

            
            </ListItem> */}
            {openSubMenu && (
              <>
                <MenuItem>
                  <div className="ml-4">
                    <IoHome />
                    <HashLink
                      to="/dashboard/films"
                      className="nav-link"
                      scroll={(el) =>
                        el.scrollIntoView({ behavior: "auto", block: "end" })
                      }
                    >
                      Film
                    </HashLink>
                  </div>
                </MenuItem>
                <MenuItem>
                  <div className="ml-4">
                    <IoHome />
                    <HashLink
                      to="/dashboard/addnew"
                      className="nav-link"
                      scroll={(el) =>
                        el.scrollIntoView({ behavior: "auto", block: "end" })
                      }
                    >
                      Add New
                    </HashLink>
                  </div>
                </MenuItem>
              </>
            )}

            <NavLink button to="/home" sx={{}}>
              <ListItemText primary="Trở lại trang chủ" />
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
          <Typography variant="button">
            {location.pathname.slice(1).toLocaleUpperCase()}
          </Typography>
        </Box>

        <Box>{props.children}</Box>
      </Box>
    </Box>
  );
}
