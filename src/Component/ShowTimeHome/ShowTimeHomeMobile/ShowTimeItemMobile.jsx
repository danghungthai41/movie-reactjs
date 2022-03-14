import React from "react";
import { NavLink } from "react-router-dom";
import img from "../../../Theme/icons";
import moment from "moment";
import { calEndTimeMove } from "../../../Pages/Detail/ShowTime/RenderShowTime";

const ShowTimeItemMobile = ({ item }) => {
  console.log(item);
  return (
    <>
      <div className="showTimeRight__item ">
        <div className="showTimeRight__top f-flex">
          <div className="d-flex">
            <img style={{ width: 50 }} src={item.hinhAnh} alt="" />
            <div className="showTimeRight__info ml-2">
              <p className="m-0">
                <span className="buttonAge">C18</span>
                {item.tenPhim}
              </p>
              <p>100 phút - TIX 9.2 - IMDb 10</p>
            </div>
          </div>
        </div>
        <div className="showTimeRight__bottom">
          <div className="showTimeRight__time">
            {item.lstLichChieuTheoPhim?.slice(0, 6).map((cal) => {
              return (
                <NavLink
                  to={`/checkout/${cal.maLichChieu}`}
                  className="buttonTime"
                >
                  <span>{moment(cal.ngayChieuGioChieu).format("hh:mm")}</span> ~{" "}
                  {calEndTimeMove(cal.ngayChieuGioChieu)}
                </NavLink>
              );
            })}

            {/* <span className="buttonTime">12:00 ~ 6:00</span>
            <span className="buttonTime">12:00 ~ 6:00</span>
            <span className="buttonTime">12:00 ~ 6:00</span>
            <span className="buttonTime">12:00 ~ 6:00</span>
            <span className="buttonTime">12:00 ~ 6:00</span>
            <span className="buttonTime">12:00 ~ 6:00</span> */}
          </div>
        </div>
      </div>
      <hr
      noShade
        style={{
          background: "#fdfdfde0",
          width: "90%",
          margin: "15px auto",
        }}
      />
    </>
  );
};

export default React.memo(ShowTimeItemMobile);
