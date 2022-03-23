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
import Loader from "../../Component/Loading";

function CheckOut() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { maLichChieu } = useParams();
  const { isLoading } = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(fetchTicketRoom(maLichChieu));
  }, [maLichChieu]);
  const ticketRoomList = useSelector((state) => state.booking.ticketRoomList);
  const { thongTinPhim } = ticketRoomList;
  if (!localStorage.getItem("token")) {
    Swal.fire({
      title: "Bạn Vui Lòng Đăng Nhập",
      icon: "warning",
      showCancelButton: true,
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        history.push("/signin");
      } else {
        history.push("/");
      }
    });
  }
  return (
    <>
      {isLoading && <Loader />}
      <div className="checkout text-white">
        <div className="checkout__cover row">
          <CheckOutLeft ticketRoomList={ticketRoomList} />
          <CheckOutRight thongTinPhim={thongTinPhim} />
        </div>
      </div>
    </>
  );
}

export default React.memo(CheckOut);
