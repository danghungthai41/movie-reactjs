import React from "react";
import img from "../../Theme/icons";
export default function News() {
  const [choseComponent, setChoseComponent] = React.useState("dienAnh");

  return (
    <>
      <div className="news" id="tinTuc">
        <div className="news__content container">
          <ul
            className="nav nav-pills mb-3 justify-content-center"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="pills-home-tab"
                data-toggle="pill"
                href="#pills-home"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
              >
                Điện Ảnh 24h
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-profile-tab"
                data-toggle="pill"
                href="#pills-profile"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
              >
                Review
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link"
                id="pills-contact-tab"
                data-toggle="pill"
                href="#pills-contact"
                role="tab"
                aria-controls="pills-contact"
                aria-selected="false"
              >
                Khuyến Mãi
              </a>
            </li>
          </ul>
          <div className="tab-content" id="pills-tabContent">
            {/* ĐIỆN ẢNH 24H */}

            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              <div className="row" id="reviewContent">
                <div className="row">
                  <div className="col-12 col-sm-6 news__item">
                    <a href="/" className="news__top">
                      <img className="img-fluid" src={img.pic3} alt="img" />
                    </a>
                    <a className="news__title" href="/">
                      <p>
                        Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên
                        kết{" "}
                      </p>
                    </a>
                    <p className="news__description news__description__big">
                      Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ
                      Ám
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
                  <div className="col-12 col-sm-6 news__item">
                    <a href="/" className="news__top">
                      <img className="img-fluid" src={img.pic2} alt="img" />
                    </a>
                    <a className="news__title" href="/">
                      <p>Review: Dinh Thự Oan Khuất (Ghost Of War) </p>
                    </a>
                    <p className="news__description news__description__big">
                      Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự
                      Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!{" "}
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
                  <div className="col-12 col-sm-4 news__item">
                    <a href="/">
                      <img className="img-fluid" src={img.pic1} alt="img" />
                    </a>
                    <a className="news__title" href="/">
                      <p>
                        ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh{" "}
                      </p>
                    </a>
                    <p className="news__description">
                      Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019
                      của đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt
                      chủng tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm
                      nay.{" "}
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
                  <div className="col-12 col-sm-4 news__item">
                    <a href="/">
                      <img className="img-fluid" src={img.pic4} alt="img" />
                    </a>
                    <a className="news__title" href="/">
                      <p> American Sniper - Chính nghĩa hay phi nghĩa? </p>
                    </a>
                    <p className="news__description">
                      American Sniper khắc họa một tay súng bắn tỉa “huyền
                      thoại” của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông.
                      Câu chuyện phim chậm rãi đưa người xem qua từng thời khắc
                      khác nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập
                      quân đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ
                      nhàng...{" "}
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
                  <div className="col-12 col-sm-4 news__item">
                    <div className="row">
                      <div className="col-12 news__last">
                        <div className="row">
                          <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                            <a href="/">
                              <img
                                className="img-fluid img_w"
                                src={img.news1}
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="col-10 col-sm-8 col-lg-9 news__small">
                            <a className="news__title" href="/">
                              <p className="hiding">
                                {" "}
                                Review: Spider-Man: Into The Spider-Vesre{" "}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 news__last">
                        <div className="row">
                          <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                            <a href="/">
                              <img
                                className="img-fluid img_w"
                                src={img.news2}
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="col-10 col-sm-8 col-lg-9 news__small">
                            <a className="news__title" href="/">
                              <p className="hiding">
                                {" "}
                                COVID-19 là bản chính thức của MEV-1 phim
                                contagion (2011){" "}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 news__last">
                        <div className="row">
                          <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                            <a href="/">
                              <img
                                className="img-fluid img_w"
                                src={img.news3}
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="col-10 col-sm-8 col-lg-9 news__small">
                            <a className="news__title" href="/">
                              <p className="hiding">
                                {" "}
                                [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống
                                chưa bao giờ lầy lội và hài hước đến thế{" "}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 news__last">
                        <div className="row">
                          <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                            <a href="/">
                              <img
                                className="img-fluid img_w"
                                src={img.news4}
                                alt="img"
                              />
                            </a>
                          </div>
                          <div className="col-10 col-sm-8 col-lg-9 news__small">
                            <a className="news__title" href="/">
                              <p className="hiding">
                                [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ
                                Siêu anh hùng Valiant{" "}
                              </p>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnXemThem d-flex justify-content-center">
                <button
                  className="btn buttonStyle mt-1 mb-4"
                  id="btnXemThemReview"
                >
                  XEM THÊM
                </button>
              </div>
            </div>

            {/* REVIEW */}
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              <div className="row" id="reviewContent">
                <div className="col-12 col-sm-6 news__item">
                  <a href="/">
                    <img className="img-fluid" src={img.pic4} alt="img" />
                  </a>
                  <a className="news__title" href="/">
                    <p className="news__title__small">
                      Review: Tàn Tích Quỷ Ám (Relic) - Ba thế hệ và mối liên
                      kết{" "}
                    </p>
                  </a>
                  <p className="news__description    ">
                    Điểm nhấn của phim kinh dị năm 2020 chính là Tàn Tích Quỷ Ám
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
                <div className="col-12 col-sm-6 news__item">
                  <a href="/">
                    <img className="img-fluid" src={img.pic3} alt="img" />
                  </a>
                  <a className="news__title" href="/">
                    <p className="news__title__small">
                      Review: Dinh Thự Oan Khuất (Ghost Of War){" "}
                    </p>
                  </a>
                  <p className="news__description">
                    Tuy là một bộ phim có chất lượng tốt, nhưng có vẻ Dinh Thự
                    Oan Khuất vẫn chưa đủ để đem khán giả trở lại phòng vé!{" "}
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
                <div className="col-12 col-sm-4 news__item">
                  <a href="/">
                    <img className="img-fluid" src={img.pic2} alt="img" />
                  </a>
                  <a className="news__title" href="/">
                    <p>
                      ‘BlacKkKlansman’ - cốc nước lạnh để người Mỹ thức tỉnh{" "}
                    </p>
                  </a>
                  <p className="news__description news__description__small">
                    Tác phẩm nhận đề cử Phim truyện xuất sắc tại Oscar 2019 của
                    đạo diễn Spike Lee là một lát cắt nữa về nạn phân biệt chủng
                    tộc - nỗi đau gây nhức nhối nước Mỹ cho tới tận hôm nay.{" "}
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
                <div className="col-12 col-sm-4 news__item">
                  <a href="/">
                    <img className="img-fluid" src={img.pic1} alt="img" />
                  </a>
                  <a className="news__title" href="/">
                    <p>American Sniper - Chính nghĩa hay phi nghĩa? </p>
                  </a>
                  <p className="news__description news__description__small">
                    American Sniper khắc họa một tay súng bắn tỉa “huyền thoại”
                    của Hải quân Mỹ với 4 lần tham chiến ở Trung Đông. Câu
                    chuyện phim chậm rãi đưa người xem qua từng thời khắc khác
                    nhau của Kyle, từ thửa nhỏ, thiếu niên, rồi gia nhập quân
                    đội, rồi tham chiến. Từng khoảnh khắc bắt đầu nhẹ nhàng...{" "}
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
                <div className="col-12 col-sm-4 news__item">
                  <div className="row">
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src={img.news1}
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              Review: Spider-Man: Into The Spider-Vesre{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src={img.news2}
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              COVID-19 là bản chính thức của MEV-1 phim
                              contagion (2011){" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src={img.news3}
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [Review] Siêu Vệ Sĩ Sợ Vợ - Giải cứu Tổng thống
                              chưa bao giờ lầy lội và hài hước đến thế{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src={img.news4}
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [Review] Bloodshot - Mở màn ấn tượng cho Vũ trụ
                              Siêu anh hùng Valiant{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnXemThem d-flex justify-content-center">
                <button className="btn buttonStyle my-5" id="btnXemThemReview">
                  XEM THÊM
                </button>
              </div>
            </div>

            {/* KHUYẾN MÃI */}
            <div className="tab-pane fade" id="pills-contact" role="tabpanel">
              <div className="row" id="khuyenMaiContent">
                <div className="col-12 col-sm-6 news__item">
                  <a href="/">
                    <img className="img-fluid" src={img.pic1} alt="img" />
                  </a>
                  <a className="news__title" href="/">
                    <p className="news__title__small">
                      BHD 59K/VÉ CẢ TUẦN !!!{" "}
                    </p>
                  </a>
                  <p className="news__description">
                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                    59k/vé khi mua vé trên TIX hoặc Mục Vé Phim trên ZaloPay.{" "}
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
                <div className="col-12 col-sm-6 news__item">
                  <a href="/">
                    <img className="img-fluid" src={img.pic2} alt="img" />
                  </a>
                  <a className="news__title" href="/">
                    <p className="news__title__small">
                      TIX 1K/VÉ NGẠI CHI GIÁ VÉ{" "}
                    </p>
                  </a>
                  <p className="news__description">
                    Đồng giá 1k/vé cả tuần tất cả các rạp trên TIX + Nhận thêm
                    02 voucher thanh toán ZaloPay thả ga{" "}
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
                <div className="col-12 col-sm-4 news__item">
                  <a href="/">
                    <img className="img-fluid" src={img.pic3} alt="img" />
                  </a>
                  <a className="news__title" href="/">
                    <p>ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX </p>
                  </a>
                  <p className="news__description">
                    ĐỒNG GIÁ 1K/VÉ KHI MUA VÉ QUA TIX Hành trình tìm Ròm và Phúc
                    chỉ với 1k cả tuần + nhận thêm 02 voucher khi đặt vé qua
                    TIX.
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
                <div className="col-12 col-sm-4 news__item">
                  <a href="/">
                    <img className="img-fluid" src={img.pic4} alt="img" />
                  </a>
                  <a className="news__title" href="/">
                    <p>BHD STAR VÉ CHỈ 59.000Đ CẢ TUẦN! </p>
                  </a>
                  <p className="news__description">
                    Tận hưởng Ưu Đãi lên đến 3 VÉ BHD Star mỗi tuần chỉ với giá
                    59k/vé khi mua vé trên TIX và thanh toán bằng ZaloPay hoặc
                    Mục Vé Phim trên ZaloPay.
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
                <div className="col-12 col-sm-4 news__item">
                  <div className="row">
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src={img.news4}
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              Beta Cineplex trở lại với hàng loạt ưu đãi lớn{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src={img.news1}
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [123Phim] Thứ 6 Không Đen Tối - Ưu đãi huỷ diệt
                              11k/vé Anh Trai Yêu Quái{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w img_w"
                              src={img.news2}
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [123Phim] NHẬP MÃ 'PSM30K' - Giảm ngay 30k khi đặt
                              vé Pháp Sư Mù: Ai Chết Giơ Tay{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 news__last">
                      <div className="row">
                        <div className="col-2 col-sm-4 col-lg-3 news__small news__small__content">
                          <a href="/">
                            <img
                              className="img-fluid img_w"
                              src={img.news3}
                              alt="img"
                            />
                          </a>
                        </div>
                        <div className="col-10 col-sm-8 col-lg-9 news__small">
                          <a className="news__title" href="/">
                            <p className="hiding">
                              [Mega GS] Một đoá hoa thay ngàn lời yêu{" "}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="btnXemThem d-flex justify-content-center">
                <button
                  className="btn buttonStyle mt-1 mb-4"
                  id="btnXemThemKhuyenMai"
                >
                  XEM THÊM
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
