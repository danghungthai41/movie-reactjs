import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function Guard(props) {
  const maLoaiNguoiDung = JSON.parse(localStorage.getItem("userLogin"));
  if (maLoaiNguoiDung) {
    return props.children;
  } else {
    return <Redirect to="/" />;
  }
}
