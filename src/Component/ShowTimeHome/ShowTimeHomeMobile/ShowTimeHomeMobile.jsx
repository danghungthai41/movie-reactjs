import React, { useState } from "react";
import { useSelector } from "react-redux";
import img from "../../../Theme/icons";
import ShowTimeLeft from "../ShowTimeLeft/ShowTimeLeft";

const ShowTimeHomeMobile = ({ infoShowTime }) => {
  let [active, setActive] = useState("bhd-star-cineplex-pham-hung");
  const [view, setView] = useState("BHDStar");

  return (
    <>
      <div className="showTimeLeft__logo">
        {infoShowTime.map((item) => (
          <div onClick={()=> setView(item.maHeThongRap)} className={`showTimeLeft__logo-item ${view === item.maHeThongRap ? "active" : ""}`}>
            <img
              src={item.logo}
              alt=""
            />
            <div className="overlay"></div>
          </div>
        ))}
      </div>

      
    </>
  );
};

export default ShowTimeHomeMobile;
