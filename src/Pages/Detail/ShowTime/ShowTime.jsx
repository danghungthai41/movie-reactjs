import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ShowTimeHome from "../../../Component/ShowTimeHome";
import { fetchCinemaList } from "../../../Redux/action/cinema";
import RenderInfoMovie from "./RenderInfoMovie";
import RenderRate from "./RenderRate";
import RenderShowTime from "./RenderShowTime";
import img from "../../../Theme/icons";
export default function ShowTime(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCinemaList);
  }, []);

  const [table, setTable] = useState("showTime");

  const renderTable = (nav) => {
    switch (nav) {
      case "showTime":
        return <RenderShowTime />;
      case "rate":
        return <RenderRate />;
      default:
        break;
    }
  };
  const changeView = (view) => {
    setTable(view);
  };
  const renderShowTimeDetailPage = () => {
    return (
      <div className="movieDetail__bottom" id="lichChieuChiTiet">
        <ul className="nav nav-tabs" role="tablist">
          <li
            className="nav-item active"
            onClick={() => changeView("showTime")}
          >
            Lịch Chiếu
          </li>
          <li className="nav-item" onClick={() => changeView("rate")}>
            Đánh Giá
          </li>
        </ul>
        <React.Fragment >
          {renderTable(table)}
        </React.Fragment>
      </div>
    );
  };
  return <React.Fragment>{renderShowTimeDetailPage()}</React.Fragment>;
}
