import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import theme from "../../Theme";
import request from "../../configs/axios";
import { connect } from "react-redux";
import createAction from "../../Redux/action";
import { withStyles } from "@material-ui/core";
import { ADD_USER } from "../../Redux/constants";
import img from "../../Theme/icons";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        email: "",
        soDt: "",
        maNhom: "GP09",
        maLoaiNguoiDung: "",
      },
    };
  }
  handleOnSubmit = async (event) => {
    event.preventDefault();
    try {
      await request({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
        method: "POST",
        data: this.state.form,
      });
      this.props.dispatch(createAction(ADD_USER, this.state.form));

      Swal.fire({
        icon: "success",
        title: "Đăng Ký Thành Công",
      });
      this.props.history.push("/signin");
    } catch (err) {
      console.log(err.response.data);
    }
  };
  handleOnChange = (event) => {
    this.setState({
      form: { ...this.state.form, [event.target.name]: event.target.value },
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
              <Typography className="pr-0 mb-4" component="h1" variant="h4">
                ĐĂNG KÝ
              </Typography>
              <form onSubmit={this.handleOnSubmit} autoComplete="off">
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="taiKhoan"
                      label="Tài khoản"
                      onChange={this.handleOnChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      name="matKhau"
                      label="Mật khẩu"
                      type="password"
                      onChange={this.handleOnChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Họ và tên"
                      name="hoTen"
                      onChange={this.handleOnChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Email"
                      name="email"
                      onChange={this.handleOnChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      fullWidth
                      label="Số điện thoại"
                      className="mb-3"
                      name="soDt"
                      onChange={this.handleOnChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className="mb-3"

                >
                  ĐĂNG KÝ
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <NavLink to="/signin">
                      Bạn đã có tài khoản? Đăng Nhập
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

export default connect()(SignUp);
