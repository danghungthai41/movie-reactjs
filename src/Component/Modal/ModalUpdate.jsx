import {
  Box,
  Button,
  Grid,
  Modal,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { UserInfo } from "../../_core/models/Account";
const ModalUpdate = ({ open, handleClose, userInfo }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1200,
    bgcolor: "background.paper",
    boxShadow: 24,
    maxHeight: 600,
    pt: 2,
    px: 4,
    pb: 3,
    borderRadius: 10,
    textAlign: "center",
  };
  const [account, setAccount] = useState(new UserInfo());
  useEffect(() => {
    setAccount(userInfo);
  }, [userInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 600 }}>
        <Typography noWrap variant="h4" gutterBottom="true">
          Cập Nhật Thông Tin Tài Khoản
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="taiKhoan"
                label="Tài Khoản"
                autoComplete="off"
                value={account.taiKhoan}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="matKhau"
                label="Mật Khẩu"
                autoComplete="off"
                value={account.matKhau}
                onChange={handleChange}
                disabled
                type="password"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="hoTen"
                label="Họ Tên"
                autoComplete="off"
                value={account.hoTen}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="email"
                label="Email"
                autoComplete="off"
                value={account.email}
                onChange={handleChange}
                disabled
                type="password"
              />
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="soDT"
                label="Số Điện Thoại"
                autoComplete="off"
                value={account.soDT}
                onChange={handleChange}
              />
            </Grid>

            <Button type="submit" fullWidth variant="contained" color="primary">
              Cập Nhật
            </Button>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalUpdate;
