import React from "react";
import { useSelector } from "react-redux";
export default function RenderInfoMovie() {
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  
  
  return (
    
    <div className="showTime__infoMovie row">
       <div className="showTime__content col-5">
          <div>
              <h1>Nội dung</h1>
              <li>{movieDetail.moTa}</li>
          </div>F
      </div>
      <div className="showTime__middle col-3">
        <div>
          <li>Ngày Khởi Chiếu:</li>
          <li>Đạo diễn:</li>
          <li>Diễn viên:</li>
          <li>Thể Loại</li>
          <li>Định dạng:</li>
          <li>Quốc Gia SX:</li>
        </div>
      </div>
      <div className="showTime__right col-4">
      <h1 className="showTime__right--title">Chi Tiết</h1>

        <div>
          <li>{new Date(movieDetail.ngayKhoiChieu).toLocaleDateString("en-GB")}</li>
          <li>Vũ Ngọc Đãng</li>
          <li>Trấn Thành, Lê Giang, Tuấn Trần,...</li>
          <li>Tâm lý, gia đình, tình cảm</li>
          <li>2D/Digital</li>
          <li>Việt Nam</li>
        </div>
      </div>

    </div>

    
  );
}
