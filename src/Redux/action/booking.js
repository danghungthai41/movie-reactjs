import createAction from ".";
import request from "../../configs/axios";
import { InfoBookingTicket } from "../../_core/models/InfoBookingTicket";
import {
  FETCH_TICKET_ROOM,
  TICKET_BOOKED,
  BOOKING_SUCCESS,
} from "../constants";

export const fetchTicketRoom = (maLichChieu) => async (dispatch) => {
  try {
    const res = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });
    dispatch(createAction(FETCH_TICKET_ROOM, res.data));
  } catch (err) {
    console.log(err.reponse?.data);
  }
};
let lstTicketBooked = [];
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
      lstTicketBooked.push(infoTicket);
      // localStorage.setItem("infoTicket", lstTicketBooked);
      console.log(infoTicket)
      await dispatch(fetchTicketRoom(infoTicket?.maLichChieu));
    } catch (err) {
      console.log(err.reponse?.data);
    }
  };
