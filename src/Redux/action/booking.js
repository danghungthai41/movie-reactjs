import createAction from ".";
import request from "../../configs/axios";
import { InfoBookingTicket } from "../../_core/models/InfoBookingTicket";
import {
  FETCH_TICKET_ROOM,
  TICKET_BOOKED,
  BOOKING_SUCCESS,
  PUSH_SELECTED_SEAT,
  DISPLAY_LOADING,
  HIDDEN_LOADING,
} from "../constants";

export const fetchTicketRoom = (maLichChieu) => async (dispatch) => {
  dispatch(createAction(DISPLAY_LOADING))
  try {
    const { data } = await request({
      url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
      method: "GET",
    });

    dispatch(createAction(FETCH_TICKET_ROOM, data));
    dispatch(createAction(HIDDEN_LOADING))

  } catch (err) {
    dispatch(createAction(HIDDEN_LOADING))

    console.log(err.reponse?.data);
  }
};
export const bookingTicketAction =
  (infoTicket = new InfoBookingTicket()) =>
  async (dispatch) => {
    dispatch(createAction(DISPLAY_LOADING))

    try {
      request({
        url: "http://movieapi.cyberlearn.vn//api/QuanLyDatVe/DatVe",
        method: "POST",
        data: infoTicket,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      dispatch(createAction(BOOKING_SUCCESS, []));
      await dispatch(fetchTicketRoom(infoTicket.maLichChieu));
      dispatch(createAction(HIDDEN_LOADING))

    } catch (err) {
      dispatch(createAction(HIDDEN_LOADING))

      console.log(err.reponse?.data);
    }
  };
