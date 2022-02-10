import React from "react";
import images from "../../Theme/icons";
import Slider from "react-slick";
import SimpleSlider from "../../HOCS/slider";
export default function Banner({settings}) {

  return (
    <section
      className="banner"
      id="ungDung"
      style={{ backgroundImage: `url(${images.poster})` }}
    >
      <div className="banner__content container">
        <div className="row">
          <div className="col-12 col-lg-6 left d-flex align-items-center">
            <div className="w-100">
              <p className="lagre text-white">Ứng dụng tiện lợi dành cho</p>
              <p className="lagre text-white">người yêu điện ảnh</p>
              <p className="medium">
                Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp
                và đổi quà hấp dẫn.
              </p>
              <button className="btn btnApp">
                App miễn phí - Tải về ngay!
              </button>
              <p className="textApp">
                TIX có hai phiên bản <a href="#">iOS</a> &amp;{" "}
                <a href="#">Android</a>
              </p>
            </div>
          </div>
          <div className="col-12 col-lg-6 right">
            <img
              className="img-responsive img-phone"
              src={images.khungIphone}
              alt=""
            />
            <div className="mobileCarousel owl-carousel owl-theme">
              <SimpleSlider>
                <div className="item">
                  <img className="img-item" src={images.slider_1} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_2} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_3} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_4} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_5} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_6} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_7} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_8} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_9} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_10} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_11} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_12} alt="" />
                </div>
                <div className="item">
                  <img className="img-item" src={images.slider_13} alt="" />
                </div>
              </SimpleSlider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
