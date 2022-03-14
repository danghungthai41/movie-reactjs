import React from "react";
import Slider from "react-slick";
import img from "../../Theme/icons.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AppDowload = () => {
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  const slider = [
    img.slider_1,
    img.slider_2,
    img.slider_3,
    img.slider_4,
    img.slider_5,
    img.slider_6,
    img.slider_7,
    img.slider_8,
    img.slider_9,
    img.slider_10,
    img.slider_11,
    img.slider_12,
    img.slider_13,
  ];
  return (
    <div
      className="app__download"
      id="section4"
      style={{ backgroundImage: `url(${img.poster})` }}
    >
      <div className="app__download__container container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 left text-left px-0">
            <p className="textLeft">Ứng dụng tiện lợi dành cho</p>
            <p className="textLeft">người yêu điện ảnh</p>
            <br />
            <p className="textSmallerLeft">
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <br />
            <div className="btn_container">
              <button className="btn">
                
                <a
                  className="btn__link"
                  target="_blank"
                  rel="noreferrer"
                  href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
                >
                  {" "}
                  App miễn phí - Tải về ngay!
                </a>
              </button>
            </div>
            <p className="textAppUnder">
              TIX có hai phiên bản{" "}
              <a
                className="tag"
                target="_blank"
                rel="noopener noreferrer"
                href="https://itunes.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197?mt=8"
              >
                iOS
              </a>{" "}
              &amp;&nbsp;{" "}
              <a
                className="tag"
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
              >
                Android
              </a>
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 right px-0">
            {/* w-100 */}
            <img
              className="w-100 img__responsive"
              src={img.khungIphone}
              alt="mobile"
            />
            <div
              id="sliderScreen"
              className="wrapSlick slick-initialized slick-slider"
            >
              <div
                className="carousel slide pt-0"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <Slider {...settings}>
                    {slider.map((item, index) => {
                      return (
                        <div className="carousel-item" key={index}>
                          <img src={item} className="d-block" alt="..." />
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDowload;
