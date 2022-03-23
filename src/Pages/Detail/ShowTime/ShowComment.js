import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Star } from "@material-ui/icons";
import img from "../../../Theme/icons";
export default function ShowComment({ text, star }) {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="DanhGiaComment">
      <div className="DanhGiaComment__detail">
        <div className="DanhGiaComment__img">
          <img src={img.catCry} alt="avatar" />
          <p> {user?.hoTen}</p>
        </div>

        <div className="userDetail">
          <p>
            <span>a few seconds ago</span>
          </p>
          <h1>{text}</h1>
        </div>
      </div>
      <div>
        <div>
          {Array.from({ length: star }, (_, index) => {
            return (
              <Star style={{ color: "f0b90b" }} autocomplete key={index} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
