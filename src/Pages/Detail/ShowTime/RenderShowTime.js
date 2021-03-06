import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import moment from "moment";
export function pad(val) {
  var valString = val + "";
  if (valString.length < 2) {
    return "0" + valString;
  } else {
    return valString;
  }
}
export const calEndTimeMove = (time) => {
  let hour = +moment(time).format("hh") + 2;
  return pad(hour) + ":" + moment(time).format("mm");
};
export default function RenderShowTime() {
  const [view, setView] = useState("BHDStar");
  const { showTimeByMovieList, cinemaList } = useSelector(
    (state) => state.cinema
  );

  const lstNavDay = showTimeByMovieList?.find(
    (item) => item.maHeThongRap === view
  );
  useEffect(() => {
    const filterLstDay = [
      ...new Set(
        [
          lstNavDay?.cumRapChieu.map((rapChieu) => {
            return rapChieu.lichChieuPhim.map((lichChieu) => {
              return new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString();
            });
          }),
        ].flat(Infinity)
      ),
    ];
    setActiveNavDay(filterLstDay[0]);
  }, [view]);
  const filterLstDay = [
    ...new Set(
      [
        lstNavDay?.cumRapChieu.map((rapChieu) => {
          return rapChieu.lichChieuPhim.map((lichChieu) => {
            return new Date(lichChieu.ngayChieuGioChieu).toLocaleDateString();
          });
        }),
      ].flat(Infinity)
    ),
  ];
  const [activeNavDay, setActiveNavDay] = useState(filterLstDay[0]);

  const renderCinemaList = () => {
    return cinemaList?.map((item, index) => {
      return (
        <li
          key={index}
          className={
            item.maHeThongRap === view
              ? "movieDetailLeft__item active"
              : "movieDetailLeft__item"
          }
          onClick={() => {
            setView(item.maHeThongRap);
            setActiveNavDay(filterLstDay[0]);
          }}
        >
          <img className="movieDetailLeft__img" src={item.logo} alt="Logo" />
          <p className="movieDetailLeft__name">{item.tenHeThongRap.toUpperCase()}</p>
        </li>
      );
    });
  };
  const changeDate = (day) => {
    switch (day) {
      case 0:
        return "Ch??? Nh???t";
      case 1:
        return "Th??? Hai";
      case 2:
        return "Th??? Ba";
      case 3:
        return "Th??? T??";
      case 4:
        return "Th??? N??m";
      case 5:
        return "Th??? S??u";
      case 6:
        return "Th??? B???y";

      default:
        return "";
    }
  };

  const renderNavDay = () => {
    if (filterLstDay) {
      return filterLstDay?.map((item, index) => {
        const date = new Date(item);
        return (
          index < 12 && (
            <li
              className={
                activeNavDay === date.toLocaleDateString()
                  ? "movieDetailRight__navDayItem active"
                  : "movieDetailRight__navDayItem"
              }
              onClick={() => {
                setActiveNavDay(date.toLocaleDateString());
              }}
            >
              <p>{changeDate(date.getDay())}</p>
              {date.toLocaleDateString("en-GB") === "Invalid Date"
                ? "VUI L??NG CH???N R???P KH??C"
                : date.toLocaleDateString("en-GB")}
            </li>
          )
        );
      });
    }
  };

  const renderShowTimeByMovie = () => {
    return (
      <div className="movieDetailRight__content">
        {lstNavDay ? (
          lstNavDay.cumRapChieu.map((lichChieu,index) => {
            return (
              lichChieu && (
                <div className="movieDetailRight__item" key={index}>
                  <div className="movieDetailRight__top">
                    <p>{lichChieu.tenCumRap}</p>
                    <p>
                      ?????a ch???: 78/12 Nguy???n V??n Kh???i, P.11, G. G?? V???p{" "}
                      <span style={{ color: "red" }}>[B???n ?????]</span>
                    </p>
                  </div>
                  <div className="movieDetailRight__bottom row">
                    {lichChieu.lichChieuPhim.slice(0, 12).map((phim, index) => {
                      return (
                        index < 9 && (
                          <NavLink
                            key={phim.maRap}
                            to={`/checkout/${phim.maLichChieu}`}
                            className="buttonTime"
                          >
                            <span className="">
                              {moment(phim.ngayChieuGioChieu).format("hh:mm")}
                            </span>
                            {" ~ "}
                            {calEndTimeMove(phim.ngayChieuGioChieu)}
                          </NavLink>
                        )
                      );
                    })}
                  </div>
                </div>
              )
            );
          })
        ) : (
          <div className="noShowTime">
            <p>Kh??ng c?? l???ch chi???u phim</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="movieDetail__showTime">
      {/* <div className="row"> */}
      {/* <div className="col-4"> */}
      <div className="movieDetailLeft">
        <ul className="wrapMovieDetailLeft">{renderCinemaList()}</ul>
      </div>
      {/* </div> */}
      {/* <div className="col-8"> */}
      <div className="movieDetailRight">
        <div className="wrapMovieDetailRight__navDay">
          <ul className="movieDetailRight__navDay">{renderNavDay()} </ul>
        </div>
        {renderShowTimeByMovie()}
      </div>
    </div>
  );
}
