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
import { Box, Typography } from "@material-ui/core";
import img from "../../Theme/icons";
import Swal from "sweetalert2";
import { IoChevronDownOutline } from "react-icons/io5";
import { FaBoxes } from "react-icons/fa";

export default function AdminTemplate(props) {
  const location = useLocation();
  const [openSubMenu, setOpenSubMenu] = useState(false);

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
          <NavLink to="/dashboard">
            <Typography>
              <img style={{ width: "50px" }} src={img.logo} alt="" />
              <span>ADMIN</span>
            </Typography>
          </NavLink>
          <List component="nav" aria-label="main mailbox folders">
            <NavLink to="/dashboard">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                Dashboard
              </ListItem>
            </NavLink>
            <NavLink to="/dashboard/users">
              <ListItem button>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                Users
              </ListItem>
            </NavLink>
            <ListItem button onClick={handleOpenSubMenu}>
              <ListItemIcon>
                <DraftsIcon />
              </ListItemIcon>
              Films
              <span>
                <IoChevronDownOutline />
              </span>
            </ListItem>
            {openSubMenu && (
              <Fragment>
                <NavLink to="/dashboard/films">
                  <ListItem button className="ml-4">
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    Films
                  </ListItem>
                </NavLink>
                <NavLink to="/dashboard/addnew">
                  <ListItem button className="ml-4">
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    Add New
                  </ListItem>
                </NavLink>
              </Fragment>
            )}

            <NavLink to="/dashboard/showtimeadmin">
              <ListItem button>
                <ListItemIcon>
                  <DraftsIcon />
                </ListItemIcon>
                ShowTimeAdmin
              </ListItem>
            </NavLink>

            <NavLink button to="/home" sx={{}}>
              <ListItemText primary="Trở lại trang chủ" />
            </NavLink>
          </List>
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
