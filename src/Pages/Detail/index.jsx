import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowTime from "./ShowTime/ShowTime";
import { fetchMovieDetail } from "../../Redux/action/movie";
import { IconName } from "react-icons/fa";
import MovieDetail from "./MovieDetail/MovieDetail";
import Test from "../../Test";
import img from "../../Theme/icons";
import { fetchShowTimeByMovie } from "../../Redux/action/cinema";
export default function Detail(props) {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movie.movieDetail);

  const id = props.match.params.movieCode;
  useEffect(() => {
    dispatch(fetchMovieDetail(id));

    //Dispatch để lấy data
    dispatch(fetchShowTimeByMovie(id))
  }, [id, dispatch]);

  return (
    <div className="movieDetail" style={{background: `url(${img.bgImg})`}} >
      <MovieDetail movieDetail={movieDetail} />
      <ShowTime />
    </div>

    //   <>
    //   <div className="modal" id="trailerDetail">
    //     <div className="modal__dialog">
    //       <div className="modal__content">
    //         <iframe
    //           width="1000"
    //           height="600"
    //           src={movieDetail.trailer}
    //           frameborder="0"
    //           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    //           allowfullscreen
    //         ></iframe>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="movie__container">
    //     <div className="movie__detail">
    //       <div className="movie__background">
    //         <div className="gradient">
    //           <img src={movieDetail.hinhAnh} />
    //           <div className="blur"></div>
    //         </div>
    //       </div>
    //       <div className="movie__info">
    //         <div className="movie__img">
    //           <div
    //             data-toggle="modal"
    //             data-target="#TrailerDetail"
    //             className="movieIMG"
    //           >
    //             <img src={movieDetail.hinhAnh} />
    //             <div className="movie-img-hover">
    //               {/* <img src={img} alt="" /> */}
    //             </div>
    //           </div>
    //         </div>
    //         <div className="movie-text">
    //           <span>
    //             Ngày khởi chiếu:{" "}
    //             {new Date(movieDetail.ngayKhoiChieu).toLocaleDateString('en-GB')}
    //           </span>
    //           <p>
    //             <strong>{movieDetail.tenPhim}</strong>
    //           </p>
    //           <span>
    //             {movieDetail.thoiLuong} phút - {movieDetail.danhGia} IMDb -
    //             2D/Digital{" "}
    //           </span>
    //           <br />
    //           <button className="btn btn-danger">
    //             <a href="#muave">Mua vé</a>
    //           </button>
    //         </div>
    //         <div className="movie-rate">
    //           <div className="circle-percent">
    //             <span>7.4</span>
    //           </div>
    //           <div className="star">

    //           </div>
    //         </div>
    //       </div>
    //       <div className="movie-nav">
    //         <div className="container">
    //           <div className="movie-navbar" id="muave">
    //             <ul>
    //               <li>
    //                 <a
    //                   // onClick={() => {
    //                   //   this.setState({
    //                   //     table: this.renderTable("LichChieu"),
    //                   //   });
    //                   // }}
    //                 >
    //                   Lịch Chiếu
    //                 </a>
    //               </li>
    //               <li>
    //                 <a
    //                   // onClick={() => {
    //                   //   this.setState({
    //                   //     table: this.renderTable("ThongTin"),
    //                   //   });
    //                   // }}
    //                 >
    //                   Thông tin
    //                 </a>
    //               </li>
    //               {/* <ShowTime/> */}
    //             </ul>
    //           </div>
    //         </div>

    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
