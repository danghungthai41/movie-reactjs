import React from "react";
import img from "../../Theme/icons";

const Ticket = ({
  ticket: {
    danhSachGhe,
    maLichChieu,
    tenPhim,
    timeBooking,
    tenCumRap,
    ngayDat,
    hinhAnh,
  },
}) => {
  return (
    <div className="ticket text-center">
      <img src={img.ticket} alt="" />
      <div className="ticket__content row">
        <div className="ticket__info">
          <p>Ticket Code: {maLichChieu} </p>
          <p>Movie: {tenPhim} </p>
          <p>Booking Date: {new Date(ngayDat).toLocaleDateString()} </p>
          <p>Seats:</p>
          {danhSachGhe?.map((ve) => (
            <p key={ve.maGhe}>
              {ve.tenHeThongRap} || Seat No {ve.tenGhe}
            </p>
          ))}
        </div>

        <div>
          <img src={hinhAnh} style={{width: "250px", height: "300px"}} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Ticket;
