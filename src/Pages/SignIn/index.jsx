import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import request from "../../configs/axios";
import createAction from "../../Redux/action";
import { connect } from "react-redux";
import { ADD_USER, SET_TOKEN, USER_INFO } from "../../Redux/constants";
import { NavLink } from "react-router-dom";
import img from "../../Theme/icons";
import Swal from "sweetalert2";

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
      <div style={{ backgroundImage: `url(${img.banner})` }} className="signin">
        <div>
          <Container
            component="div"
            maxWidth="sm"
            style={{ transform: "translateY(110px)" }}
          >
            <div
              style={{ background: "#fff", padding: 35, borderRadius: "10px" }}
            >
              <Typography className="pr-0" component="h1" variant="h4">
                ĐĂNG NHẬP
              </Typography>
              <form onSubmit={this.handleOnSubmit}>
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Tài Khoản"
                  name="taiKhoan"
                  onChange={this.handleOnChange}
                  style={{ marginTop: "20px" }}
                />
                <TextField
                  style={{ marginTop: "20px" }}
                  variant="outlined"
                  fullWidth
                  name="matKhau"
                  label="Mật Khẩu"
                  type="password"
                  onChange={this.handleOnChange}
                />
                <Typography style={{ margin: "20px 0px" }}>
                  Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                </Typography>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginBottom: "20px" }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    Nếu bạn chưa có tài khoản,
                    <NavLink to="/signup" variant="body2">
                      {" "}
                      hãy đăng kí tài khoản tại đây.
                    </NavLink>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}

export default connect()(SignIn);
