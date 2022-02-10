import React from "react";
import img from "../../Theme/icons";
export default function News() {
  const [choseComponent, setChoseComponent] = React.useState("dienAnh");
  // const myRef = React.useSelector(state => state.myref.myRef);
  // const renderSelectedComponent =()=>{
  //   switch (choseComponent) {
  //     case "dienAnh":
        
  //       return <>;
    
  //     default:
  //       break;
  //   }
  // }

  return (
    <section className="news" id="tinTuc">
      <img
        src={img.backNews}
        style={{ height: "100px", margin: "0 auto", width: "100%" }}
        alt=""
      />
      <div className="news__content">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item active" role="presentation">
            Điện Ảnh 24h
          </li>
          <li className="nav-item" role="presentation">
            Review
          </li>
          <li className="nav-item" role="presentation">
            Khuyến mãi
          </li>
        </ul>
        <div className="news__info">
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="dienAnh24h"
              role="tabpanel"
            >
              <div className="container">
                <div className="row">
                  <div className="col-6 pl-0">
                    <div className="news__item">
                      <div className="news__card">
                        <img src={img.pic3} alt />
                        <p>
                          “Bóc tem” tổ hợp giải trí mới toanh của giới Hà Thành
                        </p>
                        <p>
                          Vào đúng ngày Nhà giáo Việt Nam 20/11, khu vui chơi
                          sống ảo độc-lạ-chill nhất từ trước đến giờ sẽ chính
                          thức khai trương tại 360 Giải Phóng!{" "}
                        </p>
                        <div className="news__icon">
                          <span>
                            <img src={img.like} alt /> 0
                          </span>
                          <span>
                            <img src={img.comment} alt />1
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 pl-0">
                    <div className="news__item">
                      <div className="news__card">
                        <img src={img.pic2} alt />
                        <p>
                          Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối
                          liên kết
                        </p>
                        <p>
                          Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích
                          Quỷ Ám
                        </p>
                        <div className="news__icon">
                          <span>
                            <img src={img.like} alt /> 0
                          </span>
                          <span>
                            <img src={img.comment} alt />1
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="news__item">
                      <div className="news__card">
                        <img src={img.pic3} alt />
                        <p>
                          Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối
                          liên kết
                        </p>
                        <p>
                          Điểm nhấn của phim kinh dị năm <br /> 2020 chính là
                          Tàn Tích Quỷ Ám
                        </p>
                        <div className="news__icon">
                          <span>
                            <img src={img.like} alt /> 0
                          </span>
                          <span>
                            <img src={img.comment} alt />1
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="news__item">
                      <div className="news__card">
                        <img src={img.pic4} alt />
                        <p>
                          Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối
                          liên kết
                        </p>
                        <p>
                          Điểm nhấn của phim kinh dị năm <br /> 2020 chính là
                          Tàn Tích Quỷ Ám
                        </p>
                        <div className="news__icon">
                          <span>
                            <img src={img.like} alt /> 0
                          </span>
                          <span>
                            <img src={img.comment} alt />1
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="news__item">
                      <ul
                        className="nav flex-column news__small"
                        id="myTab"
                        role="tablist"
                      >
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="business"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                          >
                            <img src={img.news1} alt />
                            <p>
                              Khi phụ nữ không còn ở <br /> thế trốn chạy của
                              nạn nhân
                            </p>
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="business"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                          >
                            <img src={img.news2} alt />
                            <p>
                              Gerard Butler cùng bồ cũ Deadpool tham gia
                              Greenland
                            </p>
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="business"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                          >
                            <img src={img.news3} alt />
                            <p>Diễn viên đặc biệt của Bằng Crhứng Vô Hình</p>
                          </a>
                        </li>
                        <li className="nav-item" role="presentation">
                          <a
                            className="nav-link"
                            id="business"
                            data-toggle="tab"
                            href="#"
                            role="tab"
                          >
                            <img src={img.news4} alt />
                            <p>
                              Pee Nak 2 - Vạn kiếp thiên <br /> thu, đi tu không
                              hết nghiệp!
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div className="w-100 text-center">
          <button className="buttonStyle text-center"> Xem Thêm</button>

          </div>

          </div>
        </div>
      </div>
    </section>
  );
}
