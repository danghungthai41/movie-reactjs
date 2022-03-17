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
  const { isLoading } = useSelector((state) => state.loading);

  const id = props.match.params.movieCode;
  useEffect(() => {
    dispatch(fetchMovieDetail(id));

    //Dispatch để lấy data
    dispatch(fetchShowTimeByMovie(id));
  }, [id, dispatch]);

  return (
    <>
      {isLoading && (
        <div className="loader">
          <img src={img.spin} alt="" className="loading rotating" />
        </div>
      )}
      <div className="movieDetail" style={{ background: `url(${img.bgImg})` }}>
        <MovieDetail movieDetail={movieDetail} />
        <ShowTime />
      </div>
    </>
  );
}
