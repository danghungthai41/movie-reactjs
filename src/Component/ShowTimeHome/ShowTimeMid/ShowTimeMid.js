import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createAction from "../../../Redux/action";
import { PUSH_SELECTED_MOVIE } from "../../../Redux/constants";
import { changeColor, changeImgByCinema } from "../ShowTimeLeft/ShowTimeLeft";

export default function ShowTimeMid(props) {
  const { view, infoShowTime, active, setActive } = props;
  const dispatch = useDispatch();

  const handleClickLstCinema = (itemPhim) => {
    dispatch(createAction(PUSH_SELECTED_MOVIE, itemPhim.danhSachPhim));
    setActive(itemPhim.maCumRap);
  };

  const renderLstCinema = () => {
    return infoShowTime.map((item, index) => {
      return (
        item.maHeThongRap === view &&
        item.lstCumRap.map((cine) => {

          return (
            <div
              key={index}
              onClick={() => {
                handleClickLstCinema(cine);
              }}
              className={
                cine.maCumRap === active
                  ? "showTimeMid__item active "
                  : "showTimeMid__item"
              }
            >
              <img style={{ width: 50 }} src={changeImgByCinema(view)} alt />
              <div className="showTimeMid__theater">
                <p>
                  <span className={changeColor(view)}>{cine.tenCumRap}</span>
                </p>
                <p>{cine.diaChi}</p>
                <p>[chi tiết]</p>
              </div>
            </div>
          );
        })
      );
    });
  };

  return <div className="showTimeMid col-5">{renderLstCinema()}</div>;
}
