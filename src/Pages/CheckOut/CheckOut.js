import React, { useEffect } from "react";
import CheckOutRight from "./CheckOuRight/CheckOutRight";
import CheckOutLeft from "./CheckOutLeft/CheckOutLeft";
import img from "../../Theme/icons";
import createAction from "../../Redux/action";
import { fetchTicketRoom } from "../../Redux/action/booking";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Component/Footer";

function CheckOut(props) {
  const maLichChieu = props.match.params.maLichChieu;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTicketRoom(maLichChieu));
  }, [maLichChieu,dispatch]);
  const ticketRoomList = useSelector((state) => state.booking.ticketRoomList);
  const { danhSachGhe, thongTinPhim } = ticketRoomList;
  const handleBookingSucess = (values) => {



  };

  return (
    <div className="checkout text-white">
      <div className="checkout__cover row">
        <CheckOutLeft danhSachGhe={danhSachGhe} thongTinPhim={thongTinPhim} onSuccess = {handleBookingSucess} />
        <CheckOutRight thongTinPhim={thongTinPhim} />
      </div>
    </div>
  );
}

export default React.memo(CheckOut);
