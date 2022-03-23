import React, { useRef, useState } from "react";
import ShowComment from "./ShowComment";
import img from "../../../Theme/icons";
import { Star } from "@material-ui/icons";
import { Container } from "@material-ui/core";

export default function RenderRate() {
  const [active, setActive] = useState(2);
  const [comment, setComment] = useState([
    { text: "Phim hay lắm mấy quá bạn ui", star: 5 },
  ]);
  const textValue = useRef(null);

  const handleComment = () => {
    const value = textValue.current.value;
    const commentText = { text: value, star: active };
    const newComment = [...comment, commentText];
    setComment(newComment);
    textValue.current.value = "";
  };

  return (
    <Container maxWidth="md">
      <div className="tabDanhGia">
        <div className="iconContainer">
          <img src={img.imgUser} alt="..."  />
        </div>
        <div className="imgContainer">
          {Array.from({ length: 5 }, (_, index) => {
            return (
              <button
                key={index}
                style={{ border: "none", background: "transparent" }}
                className={index < active ? "active" : ""}
                onClick={() => {
                  const newActive = index + 1;
                  setActive(newActive);
                }}
              >
                <Star
                  autocomplete
                  style={{
                    color: "#f0b90b",
                    border: "none",
                    background: "transparent",
                    fontSize: "35px"
                  }}
                />
              </button>
            );
          })}
        </div>

        <textarea
          rows="4"
          placeholder="Bạn nghĩ gì về phim này"
          ref={textValue}
        ></textarea>
        <div>
          <button className="btn btn-danger mb-3" onClick={handleComment}>
            Bình Luận
          </button>
        </div>
        {comment.map((item, index) => {
          return <ShowComment {...item} key={index} />;
        })}
      </div>
    </Container>
  );
}

// <div
// onClick={() => {
//   setShowComment(!showComment);
// }}
// >
// <img src="" alt="123123123123" />
// <span>Bạn nghĩ gì về phim này</span>

// </div>
// {showComment ? <ShowComment/> : ""}
// <div>
// <i>*</i>
// <i>*</i>
// <i>*</i>
// <i>*</i>
// <i>*</i>
// </div>
// {renderComment()}

// const [showComment, setShowComment] = useState(false);
// const renderComment = () => {
//   return cmt.map((comment, index) => {
//     return (
//       <div className="rate" key={index}>
//         <div className="rate__top">
//           <div className="rate__avatar">
//             <div className="row">
//               <img src="" alt="213214" />
//               <div className="rate__name">
//                 <p>Alexander Đặng</p>
//                 <p>5 giờ trước</p>
//               </div>
//               <div className="rate__star">
//                 <p>2</p>
//                 <p>**</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="rate__content">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit at
//           quam sapiente inventore placeat doloribus adipisci itaque minus
//           reprehenderit cupiditate.
//         </div>
//         <div className="rate__like">
//           <i>like</i>
//           <span>0 Thích</span>
//         </div>
//       </div>
//     );
//   });
// };
