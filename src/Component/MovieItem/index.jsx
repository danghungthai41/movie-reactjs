import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import img from "../../Theme/icons";
import Dialog from "@material-ui/core/Dialog";
import LoginRoute from "../../HOCS/route";
import CheckOut from "../../Pages/CheckOut/CheckOut";
import Swal from "sweetalert2";
import { IoPlay } from "react-icons/io5";
import { useHistory } from "react-router-dom";
const MovieItem = (props) => {
  const { hinhAnh, tenPhim, maPhim, trailer, moTa } = props.movie;
  const history = useHistory();
  // const getThoiLuong = () => {
  //   if (props.movie.lichChieu) {
  //     const thoiLuongArr = movie.lichChieu.map((item) => item.thoiLuong);
  //     const thoiLuong = new Set(thoiLuongArr);
  //     return thoiLuong;
  //   }
  // };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const muaVe = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      // return <NavLink to={`/detail/${maPhim}`}></NavLink>;
    }
    Swal.fire({
      title: "Bạn vui lòng đăng nhập",
      icon: "warning",
      text: "Bạn phải đăng nhập nha",
    });
    return <Redirect to="/signin" />;
  };
  return (
    <>
      <div class="card">
        <div class="card__button">
          <div class="card__img">
            <img src={hinhAnh} alt="" />
            <div class="card__overlay"></div>
            <div class="card__play" onClick={handleClickOpen}>
              <img src={img.buttonPlay} alt="" />
            </div>
          </div>

          <button class="buttonStyle">
            <NavLink to={`detail/${maPhim}`} className="text-white">
              {" "}
              MUA VÉ
            </NavLink>
          </button>
        </div>
        <div class="card__item">
          <div class="card__img">
            <img src={hinhAnh} alt="" />
          </div>
          <div class="card__detail">
            <p>
              <span class="card__age">C18</span>
              {tenPhim}
            </p>
            <p>{moTa.length > 50 ? moTa.slice(0, 50) + "..." : moTa}</p>
          </div>
        </div>
      </div>

      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <iframe
          width="560"
          height="315"
          src={trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>{" "}
      </Dialog>
    </>
  );
};

export default MovieItem;
