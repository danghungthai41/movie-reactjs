import React, { useState } from "react";
import { useDispatch } from "react-redux";
import createAction from "../../../Redux/action";
import { PUSH_SELECTED_MOVIE } from "../../../Redux/constants";
import img from "../../../Theme/icons";

export const changeColor = (view) => {
  switch (view) {
    case "BHDStar":
      return "showTimeMid__green";
    case "CGV":
      return "showTimeMid__red";
    case "CineStar":
      // #df0d7a
      return "showTimeMid__violet";
    case "Galaxy":
      return "showTimeMid__orange";
    case "LotteCinima":
      // #ca4137
      return "showTimeMid__brown";
    case "MegaGS":
      // #e5a813
      return "showTimeMid__gold";
    default:
      break;
  }
};

export const changeImgByCinema = (view) => {
  switch (view) {
    case "BHDStar":
      return img.rap1;
    case "CGV":
      return img.rap2;
    case "CineStar":
      // #df0d7a
      return img.rap3;
    case "Galaxy":
      return img.rap4;
    case "LotteCinima":
      // #ca4137
      return img.rap5;
    case "MegaGS":
      // #e5a813
      return img.rap1;
    default:
      break;
  }
};

export default function ShowTimeLeft(props) {
  const { infoShowTime, setActive, view, setView } = props;
  const dispatch = useDispatch();

  const renderCinemaList = () => {
    return infoShowTime?.map((item, index) => {
      return (
        <li
          className={
            view === item.maHeThongRap
              ? "showTimeLeft__logo active"
              : "showTimeLeft__logo"
          }
          onClick={() => {
            setView(item.maHeThongRap);

            dispatch(createAction(PUSH_SELECTED_MOVIE, item.lstCumRap[0]));
            setActive(item.lstCumRap[0].maCumRap);
          }}
          key={index}
        >
          <img src={item.logo} alt="" />
          <div className="showTimeLeft__logo--overlay"></div>
        </li>
      );
    });
  };
  return <ul className="showTimeLeft col-2">{renderCinemaList()}</ul>;
}
