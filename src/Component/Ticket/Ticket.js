import { Box, Button, Modal } from "@material-ui/core";
import React, { useState } from "react";
import image from "../../Theme/icons";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  bgcolor: "background.paper",
  boxShadow: 24,
  maxHeight: 600,
  pt: 2,
  px: 4,
  pb: 3,
};
const Ticket = ({
  ticket: {
    danhSachGhe,
    maVe,
    tenPhim,
    timeBooking,
    tenCumRap,
    ngayDat,
    hinhAnh,
  },
}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="ticket">
      <div className="ticket__content">
        <img
          src={hinhAnh}
          alt=""
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = 'https://picsum.photos/200/300'
          }}
        />
        <div className="ticket__info">
          <p className="ticket__text">
            Ticket Code: <span>{maVe} </span>{" "}
          </p>
          <p className="ticket__text">
            Movie: <span>{tenPhim} </span>
          </p>
          <p className="ticket__text">
            Booking Date:{" "}
            <span> {new Date(ngayDat).toLocaleDateString("en-GB")}</span>{" "}
          </p>
          <p className="ticket__text">
            Reserved Seats: <button onClick={handleOpen}>Read Detail</button>
          </p>

          <Modal open={open} onClose={handleClose}>
            <Box sx={{ ...style, width: 400 }}>
              {danhSachGhe.map((gheDaDat) => (
                <div>
                  <p>
                    <span>
                      {gheDaDat.tenHeThongRap} || {gheDaDat.tenGhe}{" "}
                    </span>
                  </p>
                </div>
              ))}
            </Box>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
