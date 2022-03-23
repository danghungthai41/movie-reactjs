import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCinemaList } from "../../../Redux/action/cinema";
import RenderRate from "./RenderRate";
import RenderShowTime from "./RenderShowTime";
export default function ShowTime(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCinemaList);
  }, []);

  const [table, setTable] = useState("Lịch Chiếu");

  const renderTable = (nav) => {
    switch (nav) {
      case "Lịch Chiếu":
        return <RenderShowTime />;
      case "Đánh Giá":
        return <RenderRate />;
      default:
        break;
    }
  };

  const renderShowTimeDetailPage = () => {
    return (
      <div className="movieDetail__bottom" id="lichChieuChiTiet">
        <ul className="nav nav-tabs" role="tablist">
          {["Lịch Chiếu", "Đánh Giá"].map((item) => (
            <li
              onClick={() => setTable(item)}
              className={`nav-item ${item === table ? "active" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
        <React.Fragment>{renderTable(table)}</React.Fragment>
      </div>
    );
  };
  return <React.Fragment>{renderShowTimeDetailPage()}</React.Fragment>;
}
