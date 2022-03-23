import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowTime from "./ShowTime/ShowTime";
import { fetchMovieDetail } from "../../Redux/action/movie";
import MovieDetail from "./MovieDetail/MovieDetail";
import Loader from "../../Component/Loading";
import img from "../../Theme/icons";
import { fetchShowTimeByMovie } from "../../Redux/action/cinema";
export default function Detail(props) {
  const dispatch = useDispatch();
  const movieDetail = useSelector((state) => state.movie.movieDetail);
  const { isLoading } = useSelector((state) => state.loading);

  const id = props.match.params.movieCode;
  useEffect(() => {
    //Lấy chi tiết phim
    dispatch(fetchMovieDetail(id));
    //Lấy lịch chiếu theo phim
    dispatch(fetchShowTimeByMovie(id));
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      <div className="movieDetail" style={{ background: `url(${img.bgImg})` }}>
        <MovieDetail movieDetail={movieDetail} />
        <ShowTime />
      </div>
    </>
  );
}
