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
const ShowTimeHome = () => {
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
    
    // dispatch(createAction(PUSH_SELECTED_MOVIE, dsPhim));
  }, []);
  const fetchMaCumRap = (maCumRap) => {
    return maCumRap;
  };

  // const renderLstLogo = () => {
  //   return infoShowTime?.map((sysCinema, index) => {
  //     return (
  //       <TabPane
  //         tab={<img style={{ width: 50 }} src={sysCinema.logo} />}
  //         key={index}
  //         className=""
  //       >

  //       </TabPane>
  //     );
  //   });
  // };
  return (
    <section className="showTimeHome" >
      <img
        src={img.backNews}
        className="w-100"
        style={{ height: "110px" }}
        alt=""
      />
      <div className="showTimeHome__cover row" id="cumRap"
>
        <ShowTimeLeft
          infoShowTime={infoShowTime}
          setActive={setActive}
          setView={setView}
          view={view}
          fetchMaCumRap={fetchMaCumRap}
        />

        <ShowTimeMid
          view={view}
          infoShowTime={infoShowTime}
          active={active}
          setActive={setActive}
        />
        <ShowTimeRight dsPhim={dsPhim} />
      </div>
    </section>
  );
};
export default ShowTimeHome;
