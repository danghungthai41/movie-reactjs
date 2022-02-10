import React, { useState } from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { calEndTimeMove } from "../../../Pages/Detail/ShowTime/RenderShowTime";

// import
export default function ShowTimeRightItem(props) {

  const { item } = props;
  const [showView, setShowView] = useState(true);
  const handleClick = () => {
    setShowView(!showView);
  };
  return (
    <div className="showTimeRight__item text-white">
      <div className="showTimeRight__top d-flex f-end" onClick={handleClick}>
        <img style={{ width: 50 }} src={item.hinhAnh} alt />
        <div className="showTimeRight__info">
          <p>
            <span>C18</span>
            {item.tenPhim}
          </p>
          <p>100 phút - TIX 9.2 - IMDb 0</p>
        </div>
        {showView ? (
          <ExpandLessIcon onClick={handleClick} style={{ color: "#000" }} />
        ) : (
          <ExpandMoreIcon onClick={handleClick} style={{ color: "#000" }} />
        )}
      </div>
      <div className="showTimeRight__bottom">
        <div className={showView ? "" : "hiddenShowTime"}>
          <h3>2D Digital</h3>
          <div className="showTimeRight__time row">
            {item.lstLichChieuTheoPhim?.slice(0, 12).map((cal) => {
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
          </div>
        </div>
      </div>
    </div>
  );
}
