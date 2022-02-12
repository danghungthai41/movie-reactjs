import React from "react";
import img from "../../Theme/icons";

const Ticket = ({
  ticket: { danhSachVe, maLichChieu, tenPhim, timeBooking, tenCumRap },
}) => {
  return (
    <div className="ticket">
      <img src={img.ticket} alt="" />
      <div className="ticket__content">
        <div className="ticket__info">
          <p>Ticket Code: {maLichChieu} </p>
          <p>Movie: {tenPhim} </p>
          <p>Booking Date: {new Date(timeBooking).toLocaleDateString()} </p>
          <p>Seats:</p>
          {danhSachVe?.map((ve) => (
            <p key={ve.maGhe}>
              {tenCumRap} || Seat No {ve.tenGhe}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ticket;
