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
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import theme from "../../Theme";
// import Header from "../../Component/Header";
import request from "../../configs/axios";
import { connect } from "react-redux";
import createAction from "../../Redux/action";
import { withStyles } from "@material-ui/core";
import Header from "../../Component/Header";
import { ADD_USER } from "../../Redux/constants";
import Layout from "../../HOCS/layout";
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
};

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
        maNhom: "GP06",
        maLoaiNguoiDung: "",
      },
    };
  }

  // "taiKhoan": "string",
  // "matKhau": "string",
  // "email": "string",
  // "soDt": "string",
  // "maNhom": "string",
  // "hoTen": "string"

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
      <React.Fragment>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Typography component="h1" variant="h4" align="center">
              Đăng Ký
            </Typography>
            <form onSubmit={this.handleOnSubmit}>
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
                    name="soDt"
                    onChange={this.handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value="allowExtraEmails" color="primary" />
                    }
                    label="I want to receive inspiration, marketing promotions and updates via email."
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     form : state.user.form,
//   }
// }
export default connect()(withStyles(styles)(SignUp));
