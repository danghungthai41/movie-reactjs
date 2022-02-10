import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import img from "../../../Theme/icons";
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
  const showTimeByMovieList = useSelector(
    (state) => state.cinema.showTimeByMovieList
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
    return showTimeByMovieList?.map((item, index) => {
      return (
        <li
          key={index}
          className={item.maHeThongRap === view ? "movieDetailLeft__item active": "movieDetailLeft__item"}
          
          onClick={() => {
            setView(item.maHeThongRap);
            setActiveNavDay(filterLstDay[0]);
            console.log("activeNavDay", activeNavDay);
            console.log("filterLstDay[0]", filterLstDay[0]);
          }}
        >
          <img className="movieDetailLeft__img" src={item.logo} alt="Logo" />
          <p>{item.tenHeThongRap}</p>
        </li>
      );
    });
  };
  const changeDate = (day) => {
    switch (day) {
      case 0:
        return "Chủ Nhật";
      case 1:
        return "Thứ Hai";
      case 2:
        return "Thứ Ba";
      case 3:
        return "Thứ Tư";
      case 4:
        return "Thứ Năm";
      case 5:
        return "Thứ Sáu";
      default:
        return "Thứ Bảy";
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
              {date.toLocaleDateString("en-GB")}
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
          lstNavDay.cumRapChieu.map((lichChieu) => {
            return (
              lichChieu && (
                <div className="movieDetailRight__item">
                  <div className="movieDetailRight__top">
                    <p>{lichChieu.tenCumRap}</p>
                    <p>
                      Địa chỉ: 78/12 Nguyễn Văn Khối, P.11, G. Gò Vấp{" "}
                      <span style={{ color: "red" }}>[Bản đồ]</span>
                    </p>
                  </div>
                  <div className="movieDetailRight__bottom row">
                    {lichChieu.lichChieuPhim.map((phim, index) => {
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
          <p>Không có lịch chiếu phim</p>
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

        {/* {getDay().map((item, index) => { 
                console.log("item", item);
               return index < 9 ? (
                 <li
                   className="nav-link"
                   onClick={() => {
                     setViewShowtime(false);
                     setView(item.day);
                      console.log("item", item);
                   }}
                 >
                   {new Date(item.day).getDay() + 1 === 1 ? (
                     <span>Chủ Nhật</span>
                   ) : (
                     <span>Thứ {new Date(item.day).getDay() + 1}</span>
                   )}
                   <p>{new Date(item.day).getDate()}</p>
                 </li>
               ) : (
                 ""
               );
             })} */}
      </div>

      {/* {viewShowtime ? renderShowTimeByMovie() : renderShowTimeByDay()} */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
