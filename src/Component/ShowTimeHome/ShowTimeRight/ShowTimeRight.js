import React from "react";
import { useSelector } from "react-redux";
import ShowTimeRightItem from "./ShowTimeRightItem";

export default function ShowTimeRight(props) {
  const { dsPhim } = props;
  const selectedMovie = useSelector((state) => state.movie.selectedMovie);

  const renderShowTimeRight = () => {
    return selectedMovie
      ? selectedMovie.danhSachPhim
        ? selectedMovie.danhSachPhim?.map((item) => {
            return <ShowTimeRightItem item={item} />;
          })
        : selectedMovie.map((item) => {
            return <ShowTimeRightItem item={item} />;
          })
      : dsPhim[0]?.danhSachPhim.map((item) => {
          return <ShowTimeRightItem item={item} key={item.maPhim} />;
        });
  };
  return <div className="showTimeRight col-5">{renderShowTimeRight()}</div>;
}
