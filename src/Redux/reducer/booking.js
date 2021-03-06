import Swal from "sweetalert2";
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
  lockedSeat: [{ maGhe: 106701 }, { maGhe: 106702 }, { maGhe: 106703 }],
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
        if(cloneSelectedLstSeat.length >= 10){
           Swal.fire({
            title: "Không Được Đặt Quá 10 ghế",
            icon: "warning"
          })
        } else {
          cloneSelectedLstSeat.push(payload);
        }
      }
      return { ...state, selectedLstSeat: cloneSelectedLstSeat };
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
