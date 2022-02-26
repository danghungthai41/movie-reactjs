import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import styles from './style';
import theme from "../../Theme";
import request from "../../configs/axios";
import createAction from "../../Redux/action";
import { connect } from "react-redux";
import { ADD_USER, SET_TOKEN, USER_INFO } from "../../Redux/constants";
import Header from "../../Component/Header";
import Layout from "../../HOCS/layout";
import { NavLink } from "react-router-dom";
import img from "../../Theme/icons";
import Swal from "sweetalert2";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = {
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      account: {
        taiKhoan: "",
        matKhau: "",
      },
    };
  }
  handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await request({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        method: "POST",
        data: this.state.account,
      });

      // data.
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("userLogin", data.maLoaiNguoiDung);
      localStorage.setItem("account", data.hoTen);

      localStorage.setItem("user", JSON.stringify(data));

      this.props.dispatch(createAction(USER_INFO, data));
      this.props.dispatch(createAction(SET_TOKEN, data.accessToken));
      this.props.dispatch(createAction(ADD_USER, data.maLoaiNguoiDung));
      Swal.fire({
        title: "Đăng Nhập Thành Công",
        icon: "success",
      });
      // localStorage.setItem("taiKhoan", this.state.account.taiKhoan);

      this.props.history.goBack();
    } catch (err) {
      console.log(err.response?.data);
    }
  };
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      account: { ...this.state.account, [name]: value },
    });
  };
  render() {
    return (
      <div
        style={{
          background: `url(${img.banner})`,
          padding: "100px 0px",
          backgroundPosition: "center",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <Container
          component="main"
          maxWidth="xs"
          style={{ background: "#fff", padding: 50 }}
        >
          <CssBaseline />
          <div>
            <Avatar></Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form onSubmit={this.handleOnSubmit}>
              <TextField
                variant="outlined"
                fullWidth
                label="Username"
                name="taiKhoan"
                onChange={this.handleOnChange}
                style={{ marginTop: 10 }}
              />
              <TextField
                style={{ marginTop: 10 }}
                variant="outlined"
                fullWidth
                name="matKhau"
                label="Password"
                type="password"
                onChange={this.handleOnChange}
              />
              <Typography>
                Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
              </Typography>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  Nếu bạn chưa có tài khoản,
                  <NavLink to="/signup" variant="body2">
                    hãy đăng kí tài khoản tại đây
                  </NavLink>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Container>
      </div>
    );
  }
}

export default connect()(SignIn);
