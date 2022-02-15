import createAction from ".";
import request from "../../configs/axios";
import { InfoBookingTicket } from "../../_core/models/InfoBookingTicket";
import {
  FETCH_TICKET_ROOM,
  TICKET_BOOKED,
  BOOKING_SUCCESS,
  PUSH_SELECTED_SEAT,
} from "../constants";

export const fetchTicketRoom = (maLichChieu) => async (dispatch) => {
  try {
    const { data } = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });

    dispatch(createAction(FETCH_TICKET_ROOM, data));
  } catch (err) {
    console.log(err.reponse?.data);
  }
};
export const bookingTicketAction =
  (infoTicket = new InfoBookingTicket()) =>
  async (dispatch) => {
    try {
      request({
        url: "https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe",
        method: "POST",
        data: infoTicket,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
     
      dispatch(createAction(BOOKING_SUCCESS, []));
      await dispatch(fetchTicketRoom(infoTicket.maLichChieu));

    } catch (err) {
      console.log(err.reponse?.data);
    }
  };
