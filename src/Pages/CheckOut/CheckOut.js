import React, { useEffect } from "react";
import CheckOutRight from "./CheckOuRight/CheckOutRight";
import CheckOutLeft from "./CheckOutLeft/CheckOutLeft";
import img from "../../Theme/icons";
import createAction from "../../Redux/action";
import { fetchTicketRoom } from "../../Redux/action/booking";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Component/Footer";
import { InfoRoomTicket } from "../../_core/models/infoRoomTicket";

function CheckOut(props) {
  const maLichChieu = props.match.params.maLichChieu;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTicketRoom(maLichChieu));


    //Setup Booking Realtime, connecting with ASPNET SignalR

  }, [maLichChieu]);
  const ticketRoomList = useSelector((state) => state.booking.ticketRoomList);
  const { thongTinPhim } = ticketRoomList;
  return (
    <div className="checkout text-white">
      <div className="checkout__cover row">
      {/* danhSachGhe={danhSachGhe} thongTinPhim={thongTinPhim}  */}
        <CheckOutLeft ticketRoomList={ticketRoomList}/>
        <CheckOutRight thongTinPhim={thongTinPhim} />
      </div>
    </div>
  );
}

export default React.memo(CheckOut);
