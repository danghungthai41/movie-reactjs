import { InfoRoomTicket } from "../../_core/models/infoRoomTicket";
import {
  FETCH_TICKET_ROOM,
  PUSH_SELECTED_SEAT,
  TICKET_BOOKED,
  BOOKING_SUCCESS,
} from "../constants";
const initialState = {
  ticketRoomList: new InfoRoomTicket(),
  selectedLstSeat: [],
  ticketBooked: [],
};

const reducer = (state = initialState, { payload, type }) => {
  switch (type) {
    case FETCH_TICKET_ROOM:
      state.ticketRoomList = payload;
      return { ...state };
    case PUSH_SELECTED_SEAT:
      let cloneSelectedLstSeat = [...state.selectedLstSeat];

      const index = cloneSelectedLstSeat?.findIndex((item) => {
        return item.tenGhe === payload.tenGhe;
      });

      if (index !== -1) {
        cloneSelectedLstSeat.splice(index, 1);
      } else {
        cloneSelectedLstSeat.push(payload);
      }

      // state.selectedLstSeat = cloneSelectedLstSeat;
      // if (state.selectedLstSeat.length >= 10) {
      //   Swal.fire({
      //     title: "Không được đặt quá 10 ghế",
      //     icon: "warning",
      //   });

      // }
      return { ...state, selectedLstSeat: cloneSelectedLstSeat };
    // return { ...state };
    case TICKET_BOOKED:
      const cloneTicketBooked = [...state.ticketBooked];
      payload.map((item) => cloneTicketBooked.push(item));
      return { ...state, ticketBooked: cloneTicketBooked };

    case BOOKING_SUCCESS:
      state.selectedLstSeat = payload;
      return { ...state };

    
    default:
      return state;
  }
};
export default reducer;
