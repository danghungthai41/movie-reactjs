import React, { useEffect, useState } from "react";
import images from "../../Theme/icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchInfoShowTime } from "../../Redux/action/cinema";
import { Tabs, Radio, Space } from "antd";
import ShowTimeLeft from "./ShowTimeLeft/ShowTimeLeft";
import ShowTimeMid from "./ShowTimeMid/ShowTimeMid";
import ShowTimeRight from "./ShowTimeRight/ShowTimeRight";
import { PUSH_SELECTED_MOVIE } from "../../Redux/constants";
import createAction from "../../Redux/action";
import img from "../../Theme/icons";
import ShowTimeHomeMobile from "./ShowTimeHomeMobile/ShowTimeHomeMobile";
const ShowTimeHome = ({ isMobile }) => {
  console.log({ isMobile });
  const dispatch = useDispatch();
  const infoShowTime = useSelector((state) => state.cinema.infoShowTime);
  const { TabPane } = Tabs;
  let [active, setActive] = useState("bhd-star-cineplex-pham-hung");
  const [view, setView] = useState("BHDStar");

  const dsPhim = infoShowTime?.map((item) => {
    return item.lstCumRap[0];
  });

  useEffect(() => {
    dispatch(fetchInfoShowTime);
  }, []);

  return (
    <section className="showTimeHome">
      <img
        src={img.backNews}
        className="w-100"
        style={{ height: "110px" }}
        alt=""
      />

      <div className="showTimeHome__cover " id="cumRap">
        {isMobile.width > 992 ? (
          <>
            <ShowTimeLeft
              infoShowTime={infoShowTime}
              setActive={setActive}
              setView={setView}
              view={view}
            />

            <ShowTimeMid
              view={view}
              infoShowTime={infoShowTime}
              active={active}
              setActive={setActive}
            />
            <ShowTimeRight dsPhim={dsPhim} />
          </>
        ) : (
          <ShowTimeHomeMobile infoShowTime={infoShowTime} />
        )}
      </div>
    </section>
  );
};
export default ShowTimeHome;
