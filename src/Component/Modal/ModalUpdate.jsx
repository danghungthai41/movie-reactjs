import { Box, Button, Grid, Modal, TextField, Typography } from "@material-ui/core";
import React from "react";
import { User } from "../../_core/models/Account";

const ModalUpdate = ({ open, handleClose }) => {
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
  };
  const account = new User()

  console.log(account)
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <Typography>
          Thông Tin Tài Khoản
        </Typography>
        <form>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="taiKhoan"
                label="Account"
                autoComplete="off"
                
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="matKhau"
                label="Password"
                autoComplete="off"
                type="password"
                disabled
                
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="email"
                label="Email"
                defaultValue={account.password}
                autoComplete="off"
                
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="soDt"
                label="Phone Number"
                autoComplete="off"
                
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="hoTen"
                label="Fullname"
                autoComplete="off"
                
              />
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Cập Nhật
              </Button>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
};

export default ModalUpdate;
