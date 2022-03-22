import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowTime from "./ShowTime/ShowTime";
import { fetchMovieDetail } from "../../Redux/action/movie";
import { IconName } from "react-icons/fa";
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
    dispatch(fetchMovieDetail(id));

    //Dispatch để lấy data
    dispatch(fetchShowTimeByMovie(id));
  }, [id, dispatch]);

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
