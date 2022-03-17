import React, { useState } from "react";
import { useSelector } from "react-redux";
import img from "../../../Theme/icons";
import ShowTimeLeft from "../ShowTimeLeft/ShowTimeLeft";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import createAction from "../../../Redux/action";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { PUSH_SELECTED_MOVIE } from "../../../Redux/constants";
import { changeColor, changeImgByCinema } from "../ShowTimeLeft/ShowTimeLeft";
import ShowTimeRightItem from "../ShowTimeRight/ShowTimeRightItem";
import ShowTimeItemMobile from "./ShowTimeItemMobile";

const ShowTimeHomeMobile = ({ infoShowTime, dsPhim }) => {
  const dispatch = useDispatch();

  let [selectedMovie, setSelectedMovie] = useState();
  const [view, setView] = useState("BHDStar");
  return (
    <div className="showTimeHome-mobile">
      <div className="showTimeLeft__logo">
        {infoShowTime.map((item) => (
          <div
            key={item.maHeThongRap}
            onClick={() => setView(item.maHeThongRap)}
            className={`showTimeLeft__logo-item ${
              view === item.maHeThongRap ? "active" : ""
            }`}
          >
            <img src={item.logo} alt="" />
            <div className="overlay"></div>
          </div>
        ))}
      </div>
      <div className="showTimeHome-accordian">
        {infoShowTime.map((cumRap,index) => {
          return (
            cumRap.maHeThongRap === view &&
            cumRap.lstCumRap.map((cine) => (
              <div
                key={index}
                onClick={() => {
                  console.log(cine);
                  setSelectedMovie(cine);
                }}
              >
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="flex justify-center align-center">
                      <img src={changeImgByCinema(view)} alt="" />
                      <div className="showTimeMid__theater">
                        <p className="m-0">
                          <span className={changeColor(view)}>
                            {cine.tenCumRap}
                          </span>
                        </p>
                        <p className="m-0">{cine.diaChi}...</p>
                        <p className="text-danger">[chi tiết]</p>
                      </div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    {selectedMovie ? (
                      selectedMovie.danhSachPhim ? (
                        selectedMovie.danhSachPhim
                          .slice(0, 6)
                          .map((item) => (
                            <ShowTimeItemMobile item={item} key={item.maPhim} />
                          ))
                      ) : (
                        <p>Không Có Lịch Chiếu Phim</p>
                      )
                    ) : (
                      dsPhim[0]?.danhSachPhim
                        .slice(0, 6)
                        .map((item) => (
                          <ShowTimeItemMobile item={item} key={item.maPhim} />
                        ))
                    )}
                  </AccordionDetails>
                </Accordion>
              </div>
            ))
          );
        })}
      </div>
    </div>
  );
};

export default React.memo(ShowTimeHomeMobile);
