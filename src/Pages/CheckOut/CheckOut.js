import React, { useEffect } from "react";
import CheckOutRight from "./CheckOuRight/CheckOutRight";
import CheckOutLeft from "./CheckOutLeft/CheckOutLeft";
import img from "../../Theme/icons";
import createAction from "../../Redux/action";
import { fetchTicketRoom } from "../../Redux/action/booking";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Component/Footer";
import { InfoRoomTicket } from "../../_core/models/infoRoomTicket";
import Swal from "sweetalert2";
import { useHistory, useParams } from "react-router-dom";
import Home from "../Home";
import Header from "../../Component/Header";

function CheckOut() {
  // const maLichChieu = props.match.params.maLichChieu;
  const {maLichChieu} = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchTicketRoom(maLichChieu));
  }, [maLichChieu]);

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     Swal.fire({
  //       icon: "warning",
  //       title: "Bạn vui lòng đăng nhập",
  //       showCancelButton: true,
  //       confirmButtonText: "Tới trang đăng nhập",
  //       cancelButtonText: "Hủy Bỏ",
  //     }).then((res) => {
  //       if (res.isConfirmed) {
  //         history.push("/signin");
  //       } else {
  //         history.replace("/");
  //       }
  //     });
  //   }
  // }, []);

  const ticketRoomList = useSelector((state) => state.booking.ticketRoomList);
  const { thongTinPhim } = ticketRoomList;
  return localStorage.getItem("token") ? (
    <div className="checkout text-white">
      <div className="checkout__cover row">
        <CheckOutLeft ticketRoomList={ticketRoomList} />
        <CheckOutRight thongTinPhim={thongTinPhim} />

        
      </div>
    </div> 
  ) : <Home/>
}

export default React.memo(CheckOut);
