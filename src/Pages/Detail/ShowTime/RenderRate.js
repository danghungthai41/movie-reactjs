import React, { useState } from "react";
import cmt from "./dataComment.json";
import ShowComment from "./ShowComment";
export default function RenderRate() {
  const [showComment, setShowComment] = useState(false);
  const renderComment = () => {
    return cmt.map((comment, index) => {
      return (
        <div className="rate" key={index}>
          <div className="rate__top">
            <div className="rate__avatar">
              <div className="row">
                <img src="" alt="213214" />
                <div className="rate__name">
                  <p>Alexander Đặng</p>
                  <p>5 giờ trước</p>
                </div>
                <div className="rate__star">
                  <p>2</p>
                  <p>**</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rate__content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at
            quam sapiente inventore placeat doloribus adipisci itaque minus
            reprehenderit cupiditate.
          </div>
          <div className="rate__like">
            <i>like</i>
            <span>0 Thích</span>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <div className="row">
        <div
          onClick={() => {
            setShowComment(!showComment);
          }}
        >
          <img src="" alt="123123123123" />
          <span>Bạn nghĩ gì về phim này</span>

        </div>
          {showComment ? <ShowComment/> : ""}
        <div>
          <i>*</i>
          <i>*</i>
          <i>*</i>
          <i>*</i>
          <i>*</i>
        </div>
        {renderComment()}
      </div>
    </>
  );
}
