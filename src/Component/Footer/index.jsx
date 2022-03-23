import React, { Component } from "react";

import img from "../../Theme/icons";
const Footer = () => {
  return (
    <footer className="">
      <div className="footer__cover container">
        <div className="footer__top">
          <div className="d-none d-lg-flex">
            <div className="col-2">
              <p>TIX</p>
              <a href="#">
                <p>FAQ</p>
              </a>
              <a href="#">
                <p>Brand Guidelines</p>
              </a>
            </div>
            <div className="col-2">
              <p style={{ color: "transparent" }}>
                <br />
              </p>
              <a href="#">
                <p>Thỏa thuận sử dụng</p>
              </a>
              <a href="#">
                <p>Chính sách bảo mật</p>
              </a>
            </div>
            <div className="col-4">
              <p>ĐỐI TÁC</p>
              <div className="row line">
                <a href="#">
                  <img className="footer__icon" src={img.cgv} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.bhd} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.galaxy} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.cinestar} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.lottecinema} alt />
                </a>
              </div>
              <div className="row line">
                <a href="#">
                  <img className="footer__icon" src={img.mega} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.beta} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.ddc} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.touch} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.cinemax} alt />
                </a>
              </div>
              <div className="row line">
                <a href="#">
                  <img className="footer__icon" src={img.starLight} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.dcine} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.zalopay} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.payoo} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.vietcombank} alt />
                </a>
              </div>
              <div className="row line">
                <a href="#">
                  <img className="footer__icon" src={img.argibank} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.vietinbank} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.ivb} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.go123} alt />
                </a>
                <a href="#">
                  <img className="footer__icon" src={img.laban} alt />
                </a>
              </div>
            </div>
            <div className="col-2">
              <p>MOBILE APP</p>
              <a href="#">
                <img className="footer__icon logo" src={img.apple} alt />
              </a>
              <a href="#">
                <img className="footer__icon logo" src={img.android} alt />
              </a>
            </div>
            <div className="col-2">
              <p>SOCIAL</p>
              <a href="#">
                <img className="footer__icon logo" src={img.facebook} alt />
              </a>
              <a href="#">
                <img className="footer__icon logo" src={img.zalo} alt />
              </a>
            </div>
          </div>
          <div className="d-none d-md-flex d-lg-none">
            <div className="col-4">
              <a href="#">
                <p className="dieuChinh">Thỏa thuận sử dụng</p>
              </a>
              <a href="#">
                <p className="dieuChinh pl-2">Chính sách bảo mật</p>
              </a>
            </div>
            <div className="col-4 text-center">
              <a href="#">
                <img src="./img/facebook-logo.png" alt />
              </a>
              <a href="#">
                <img src="./img/zalo-logo.png" alt />
              </a>
            </div>
          </div>
          <div className="d-flex d-md-none">
            <div className="col-6 text-right">
              <a href="#">
                <p>Thỏa thuận sử dụng</p>
              </a>
              <a href="#">
                <img className="footer__icon logo" src={img.facebook} alt />
              </a>
            </div>
            <div className="col-6 text-left">
              <a href="#">
                <p>Chính sách bảo mật</p>
              </a>
              <a href="#">
                <img className="footer__icon logo" src={img.zalo} alt />
              </a>
            </div>
          </div>
        </div>
        <div className="footer__bot">
          <div className="row">
            <div className="col-12 col-md-1 p-0">
              <img className="zion_logo" src={img.logo} alt="ZION" />
            </div>
            <div className="col-12 col-md-9 mid">
              <p style={{ color: "#ffdc00" }}>
                Dang Hung Thai - Front End Developer
              </p>
              <p>
                Địa chỉ: 78/12 Nguyễn Văn Khối, Phường 11, Quận Gò Vấp.
                <br />
                Số Điện Thoại: 0906 709 400
                <br />
                Link Facebook: <a style={{color: "#fb4226"}} href="https://www.facebook.com/thai.danghung41/">https://www.facebook.com/thai.danghung41/</a>
              </p>
              <p>
                Email:{" "}
                <a href="#" className="support">
                  danghungthai.41@gmail.com
                </a>
              </p>
            </div>
            <div className="col-12 col-md-2 p-0 text-right bot__bot">
              <a href="#" className="logo_bct">
                <img src={img.boCongThuong} alt="Bộ Công Thương" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
