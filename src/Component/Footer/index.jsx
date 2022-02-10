import React, { Component } from "react";

import img from "../../Theme/icons";

// const Footer = () => {
//     return (
//         <div className="footer">
//         <div className="footer_container container">
//             <div className="row">
//                 <div className="col-md-4 col-sm-4 col-xs-12 mt-3">
//                     <p className="title hideOnMobile">TIX</p>
//                     <div className="row rule_container">
//                         <div className="col-md-6 col-sm-6 col-xs-6 pr-0 hideOnMobile">
//                             <a className="rule" href="/" >FAQ</a>
//                             <a className="rule" href="/">Brand Guidelines</a>
//                         </div>
//                         <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 rule_container_right">
//                             <a className="rule" href="/">Thoả thuận sử dụng</a>
//                             <a className="rule" href="/">Chính sách bảo mật</a>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="col-md-4 col-sm-4 col-xs-12 mt-3 hideOnMobile">
//                     <p className="title">ĐỐI TÁC</p>
//                     <div className="col-sm-12 col-xs-12 px-0 mb-3">
//                         <a target="_blank" rel="noopener noreferrer" href="http://bhdstar.vn" className="mr-4">
//                             <img className="iconPartner" src="../../img/cgv.png" alt="" style={{backgroundColor:"#fff"}} />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://www.galaxycine.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/rap-bhd.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://cinestar.com.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/galaxycine.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="http://lottecinemavn.com/LCHS/index.aspx" className="mr-4">
//                             <img className="iconPartner" src="../../img/rap-cinestar.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://www.megagscinemas.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/lotte.png" alt="" />
//                         </a>
//                     </div>
//                     <div className="col-sm-12 col-xs-12 px-0 mb-3">
//                         <a target="_blank" rel="noopener noreferrer" href="https://www.betacineplex.vn/home.htm" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/megags.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="http://ddcinema.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/bt.png"alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://touchcinema.com/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/dongdacinema.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://cinemaxvn.com/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/TOUCH.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://starlight.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/cnx.png" alt="" />
//                         </a>
//                     </div>
//                     <div className="col-sm-12 col-xs-12 px-0 mb-3">
//                         <a target="_blank" rel="noopener noreferrer" href="https://momo.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/STARLIGHT.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://zalopay.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/dcine.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://www.payoo.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/zalopay_icon.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://www.vietcombank.com.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/payoo.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="http://www.agribank.com.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/VCB.png" alt="" />
//                         </a>
//                     </div>
//                     <div className="col-sm-12 col-xs-12 px-0 mb-3">
//                         <a target="_blank" rel="noopener noreferrer" href="https://www.vietinbank.vn/web/home/vn/index.html" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/AGRIBANK.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://www.indovinabank.com.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/VIETTINBANK.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://123go.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/IVB.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="https://laban.vn/" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/123go.png" alt="" />
//                         </a>
//                         <a target="_blank" rel="noopener noreferrer" href="http://bhdstar.vn" className="mr-4">
//                             <img className="iconPartner" src="../../img/bank/laban.png" alt="" />
//                         </a>
//                     </div>
//                 </div>

//                 <div className="col-md-4 col-sm-12 col-xs-12 mt-3">
//                     <div className="row justify-content-around">
//                         <div className="col-xs-6 mr-4 text-center hideOnMobile">
//                             <p className="title">MOBILE APP</p>
//                             <a target="_blank" rel="noopener noreferrer" href="https://apps.apple.com/vn/app/tix-%C4%91%E1%BA%B7t-v%C3%A9-nhanh-nh%E1%BA%A5t/id615186197" className="mr-2">
//                                 <img className="iconPartner" src="../../img/apple-logo.png" alt="" />
//                             </a>
//                             <a target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123">
//                                 <img className="iconPartner" src="../../img/android-logo.png" alt="" />
//                             </a>
//                         </div>

//                         <div className="col-sm-6 col-xs-6 ml-4 text-center social">
//                             <p className="title hideOnMobile">SOCIAL</p>
//                             <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/123phim/" className="mr-3">
//                                 <img className="iconPartner" src="../../img/facebook-logo.png" alt="" />
//                             </a>
//                             <a target="_blank" rel="noopener noreferrer" href="https://zalo.me/123phim">
//                                 <img className="iconPartner iconPartner__R" src="../../img/zalo-logo.png" alt="" />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="line mt-4 mb-3"></div>

//             <div className="row">
//                 <div className="col-md-1 col-sm-12 col-xs-12">
//                     <img className="zionImg" src="../../img/zion-logo.jpg" alt="" />
//                 </div>

//                 <div className="col-md-9 col-sm-12 col-xs-12">
//                     <p className="pProductOf">TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION</p>
//                     <p className="pAddressAndTax">Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí Minh, Việt Nam.</p>
//                     <p className="pAddressAndTax">Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
//                     <p className="pAddressAndTax">đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.</p>
//                     <p className="pAddressAndTax">Số Điện Thoại (Hotline): 1900 545 436</p>
//                     <p className="pAddressAndTax mb-4">Email: <a href="mailto:support@tix.vn">support@tix.vn</a></p>
//                 </div>

//                 <div className="col-md-2 col-sm-12 col-xs-12 text-right">
//                     <a target="_blank" rel="noopener noreferrer" href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=55561" title="Bộ Công Thương">
//                         <img className="boCongThuong" src="../../img/dathongbao.png" alt="Bộ Công Thương" />
//                     </a>
//                 </div>
//             </div>
//         </div>
//     </div>
//     )
// }

// export default Footer;



const Footer =()=> {
  
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
                <img className="zion_logo" src={img.catCry} alt="ZION" />
              </div>
              <div className="col-12 col-md-9 mid">
                <p style = {{color: "#ffdc00"}}>BINANCE – SẢN PHẨM LẤY ĐI NƯỚC MẮT CỦA NHIỀU TRADER</p>
                <p>
                  Địa chỉ: 78/12 Nguyễn Văn Khối, Phường 11, Quận Gò Vấp.
                  <br />
                  Giấy chứng nhận đăng ký kinh doanh số: 0101659783,
                  <br />
                  đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở
                  kế hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
                  <br />
                  Số Điện Thoại (Hotline): 0906 709 400
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
                  <img src={img.boCongThuong} alt = "Bộ Công Thương" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

export default Footer;
